import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productos from "./product.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  let opcionValida = true;
  const { idCategory } = useParams();
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

  // useEffect(() => {
  //   if (idCategory === undefined) {
  //     customFetch(500, productos)
  //       .then((result) => setDatos(result))
  //       .catch((err) => console.log(err));
  //   } else {
  //     customFetch(
  //       500,
  //       productos.filter((item) => item.categoria === idCategory)
  //     )
  //       .then((result) => setDatos(result))
  //       .catch((err) => console.log(err));
  //   }
  // }, [idCategory]);

  useEffect(() => {
    customFetch(
      500,
      productos.filter((item) => {
        if (idCategory === undefined) return item;
        return item.categoria === idCategory;
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div className="bodyGallery">
      <h1 className="textMain">BIENVENIDOS A MAMITUS - PRODUCTOS A CROCHET</h1>
      <ItemList items={datos}></ItemList>
    </div>
  );
};

export default ItemListContainer;
