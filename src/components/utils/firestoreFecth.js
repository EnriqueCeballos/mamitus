import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  where,
  query,
} from "firebase/firestore";
import db from "./FirebaseConfig";
import { doc } from "firebase/firestore";

export const firestoreFetchCategory = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(collection(db, "item"), where("categoria", "==", idCategory));
  } else {
    q = query(collection(db, "item"), orderBy("nombre"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestone = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestone;
};
export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "item", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.map((item) => ({ id: idItem, ...item.data() }));
  } else {
    return <div className="errorItems">PRODUCTO NO ENCONTRADO!</div>;
  }
};
