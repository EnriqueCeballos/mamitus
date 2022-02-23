import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand">MAMITUS</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Ferias</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
            <li>
              <Link to={"/categoria/redondas"}>Alfombras Redondas</Link>
            </li>
            <li>
              <Link to={"/categoria/cuadradas"}>Alfombras Cuadradas</Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to={"/categoria/basicas"}>Alfombras Basicas</Link>
            </li>
            {/* </ul> */}
            {/* </li> */}
            {/* <li className="nav-item">
              <a className="nav-link ">Nosotros</a>
            </li> */}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
            <CartWidget />
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

// import { useEffect, useState } from "react";
// import customFetch from "./utils/customFetch";
// import ItemDetail from "./ItemDetail";
// import productos from "./product.js";
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//   const { idItem } = useParams();
//   const [dato, setDato] = useState({});
//   const getItem = () => {
//     if (idItem === undefined) {
//       customFetch(2000, productos)
//         .then((result) => setDato(result))
//         .catch((err) => console.log(err));
//     } else {
//       customFetch(
//         2000,
//         productos.find((item) => item.id === parseInt(idItem))
//       )
//         .then((resultado) => setDato(resultado))
//         .catch((error) => console.log(error));
//     }
//     useEffect(() => {
//       getItem();
//     }, [idItem]);

//     return <ItemDetail item={dato} />;
//   };
// };

// export default ItemDetailContainer;
