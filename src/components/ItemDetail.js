import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

function ItemDetail({ item }) {
  const [stock, setStock] = useState(0);
  const prueba = useContext(CartContext);

  const addToCart = (unity) => {
    alert(`Agregaste ${unity} producto(s) al carrito`);

    setStock(unity);
    prueba.addToCart(item, unity);
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
        </div>
        <div className="compraProducto"></div>
        <div className="buyNow">
          {stock === 0 ? (
            <ItemCount stock="5" initial="1" onAdd={addToCart} />
          ) : (
            <Link to="/cart" className="buttonCart">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default ItemDetail;
