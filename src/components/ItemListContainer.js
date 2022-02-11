import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productos from "./product.js";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

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

  useEffect(() => {
    customFetch(2000, productos)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);
  console.log(datos);
  return (
    <div>
      <h1>hola</h1>
      <ItemList items={datos}></ItemList>
    </div>
  );
};

export default ItemListContainer;
