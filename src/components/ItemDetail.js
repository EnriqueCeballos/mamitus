import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Modal from "./Modal";

function ItemDetail({ item }) {
  const [buyItemQty, setBuyItemQty] = useState(0);
  const prueba = useContext(CartContext);

  const [quantityValue, setQuantityValue] = useState(0);

  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  const onAdd = (quantity) => {
    if (quantity > 0) {
      setQuantityValue(quantity);
      setActive(true);
      setBuyItemQty(quantity);
      prueba.addToCart(item, quantity);
    }
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
          <p className="nameProductDetails">Producto: {item.nombre}</p>
          <p className="detailsProduct">Descripcion: {item.descripcion}</p>
          <p className="priceProductDetails">Precio: ${item.precio}</p>
          <p className="stockProductDetails">
            Disponible(s): {item.stock}Unidad(es)
          </p>
        </div>

        <Modal active={active} toggle={toggle}>
          <p>Agregaste {quantityValue} producto(s) al carrito</p>
        </Modal>

        <div className="addToCart">
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
      <Link to={"/"}>
        <button className="buttonContinueShopping">← Volver al inicio</button>
      </Link>
    </>
  );
}
export default ItemDetail;
