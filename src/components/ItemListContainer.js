import ItemList from "./ItemList";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { firestoreFetchCategory } from "./utils/firestoreFecth";

// import { CartContext } from "./CartContext";

const ItemListContainer = () => {
  // const prueba = useContext(CartContext);
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetchCategory(idCategory)
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
  }, [idCategory]);

  if (datos.length === 0) {
    return (
      <>
        <h1 className="textMain"></h1>
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only"></span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="textMain">
          BIENVENIDOS A MAMITUS - PRODUCTOS A CROCHET
        </h1>
        <div className="filter">
          <p>CATEGORIA</p>
          <ul id="filterGallery">
            <li className="filterGallery__text">
              <Link to={"/categoria/redondas"}>Alfombras Redondas</Link>
            </li>
            <li className="filterGallery__text">
              <Link to={"/categoria/cuadradas"}>Alfombras Cuadradas</Link>
            </li>
            <li className="filterGallery__text">
              <Link to={"/categoria/basicas"}>Alfombras Basicas</Link>
            </li>
          </ul>
        </div>
        <ItemList items={datos}></ItemList>
      </>
    );
  }
};

export default ItemListContainer;
