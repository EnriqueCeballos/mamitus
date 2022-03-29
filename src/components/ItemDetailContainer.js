import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import db from "./utils/FirebaseConfig";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [dato, setDatos] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const firestoreFetchOne = async () => {
      const docRef = doc(db, "item", idItem);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: idItem,
          ...docSnap.data(),
        };
      } else {
        return <div className="errorItems">PRODUCTO NO ENCONTRADO!</div>;
      }
    };
    firestoreFetchOne()
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
  }, [dato]);

  return <ItemDetail item={dato} />;
};

export default ItemDetailContainer;
