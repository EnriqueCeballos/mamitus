import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productos from "./product.js";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "./utils/FirebaseConfig";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "item"));
      return querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
    };
    firestoreFetch()
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
  }, [datos]);

  return (
    <div className="bodyGallery">
      <h1 className="textMain">BIENVENIDOS A MAMITUS - PRODUCTOS A CROCHET</h1>
      <ItemList items={datos}></ItemList>
    </div>
  );
};

export default ItemListContainer;
