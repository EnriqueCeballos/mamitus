import { useEffect, useState } from "react";
import customFetch from "./utils/customFetch";
import ItemDetail from "./ItemDetail";
import productos from "./product.js";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const getItem = () => {
    customFetch(2000, productos[parseInt()])
      .then((resultado) => setDato(resultado))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getItem();
  }, []);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
