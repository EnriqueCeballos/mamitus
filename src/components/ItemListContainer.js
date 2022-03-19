import ItemList from "./ItemList";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemListContainer = () => {
  const prueba = useContext(CartContext);
  const [datos, setDatos] = useState([]);
  const { categoria } = useParams();

  const firestoreFetch = () => {
    let getProducts = prueba.getProductsFirebase();
    return getProducts;
  };

  useEffect(() => {
    firestoreFetch()
      .then((result) => setDatos(result))

      .catch((error) => console.log(error));
  }, [categoria]);
  //   firestoreFetch()
  //     .then((res) => {
  //       let consulta = [];
  //       if (!categoria) {
  //         consulta = collection.get();
  //         if (categoria === "cuadradas")
  //           consulta = collection.where("categoria", "==", "cuadradas").get();
  //         if (categoria === "basicas")
  //           consulta = collection.where("categoria", "==", "basicas").get();
  //         // } else {
  //         //   consulta = collection.where("categoria", "==", id).get();
  //       }
  //       const documento = res.docs;
  //       let misProductos = [];
  //       documento.forEach((producto) => {
  //         const consultaFinal = {
  //           id: producto.id,
  //           ...producto.data(),
  //         };
  //         misProductos.push(consultaFinal);
  //       });
  //       setDatos(misProductos);
  //     })

  //     .catch((err) => console.log(err));
  //   console.log(categoria);
  // }, [categoria]);

  if (datos.length === 0) {
    return (
      <div className="bodyGallery">
        <h1 className="textMain"></h1>
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bodyGallery">
        <h1 className="textMain">
          BIENVENIDOS A MAMITUS - PRODUCTOS A CROCHET
        </h1>
        <ItemList items={datos}></ItemList>
      </div>
    );
  }
};

export default ItemListContainer;
