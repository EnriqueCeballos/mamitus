import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "./product.js";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  let opcionValida = true;

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

  const [dato, setDatos] = useState({});
  const { idItem } = useParams();
  console.log(idItem);
  const getItem = () => {
    if (idItem === undefined) {
      customFetch(1000, productos)
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        productos.find((item) => item.id === parseInt(idItem))
      )
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    getItem();
  }, [idItem]);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
