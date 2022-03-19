import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function ItemDetail({ item }) {
  const [buyItemQty, setBuyItemQty] = useState(0);
  const prueba = useContext(CartContext);

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} producto(s) al carrito`);
    setBuyItemQty(quantity);
    prueba.addToCart(item, quantity);
  };

  return (
    <>
      <div className="detailsItemsCard">
        <div className="imagenDetails">
          <img
            src={item.img}
            alt="Imagenes varias"
            className="cardImgDetails"
          />
        </div>
        <div className="textDetails">
          <p className="nameProductDetails">{item.nombre}</p>
          <p className="detailsProduct">{item.descripcion}</p>
          <p className="priceProductDetails">Precio: ${item.precio}</p>
          <p className="stockProductDetails">
            Disponible(s): {item.stock}Unidad(es)
          </p>
        </div>
        <div className="compraProducto"></div>
        <div className="buyNow">
          {item.stock > 0 &&
            (buyItemQty === 0 ? (
              <ItemCount stock="5" initial="1" onAdd={onAdd} />
            ) : (
              <Link to="/cart" className="buttonCart">
                Terminar compra
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
export default ItemDetail;
