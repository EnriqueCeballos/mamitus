import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import productos from "./product.js";

function Item({ item }) {
  let opcionValida = true;
  const [datos, setDatos] = useState([]);
  const customFetch = (timeout, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (opcionValida) {
          resolve(data);
        } else {
          reject("Producto no encontrado");
        }
      }, timeout);
    });
  };
  useEffect(() => {
    customFetch(1000, productos)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [datos]);
  return (
    <>
      <div className="cardProduct">
        <div className="imagen-producto">
          <img src={item.img} alt="Imagenes varias" className="card_img" />
          {/* <p className="detailsProduct">{item.descripcion}</p> */}
          <p className="nameProduct">{item.nombre}</p>
          <p className="priceProduct">Precio: ${item.precio}</p>
        </div>
        <div className="buyNow">
          <div className="textBuy">
            <Link to={`/item/${item.id}`}>DETALLES</Link>
          </div>
        </div>
        <ItemCount stock="5" initial="1" />
      </div>
    </>
  );
}
export default Item;
