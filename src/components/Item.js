import { Link } from "react-router-dom";
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
      <article className="cardProduct">
        <div className="imagen-producto">
          <img src={item.img} alt="Imagenes varias" className="card_img" />
          {/* <p className="detailsProduct">{item.descripcion}</p> */}
        </div>
        <div className="cardProduct-info">
          <p>Precio: ${item.precio}</p>
          <p>Stock: {item.stock}u.</p>
        </div>
        <p className="nameProduct">{item.nombre}</p>
        <Link to={`/item/${item.id}`} className="textBuy">
          DETALLES
        </Link>
      </article>
    </>
  );
}
export default Item;
