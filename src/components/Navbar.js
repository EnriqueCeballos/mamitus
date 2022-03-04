import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          MAMITUS
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
              <Link to="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ferias" className="nav-link">
                Ferias
              </Link>
            </li>
            <li>
              <Link to={"/categoria/redondas"} className="nav-link ">
                Alfombras Redondas
              </Link>
            </li>
            <li>
              <Link to={"/categoria/cuadradas"} className="nav-link ">
                Alfombras Cuadradas
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to={"/categoria/basicas"} className="nav-link ">
                Alfombras Basicas
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/nosotros" className="nav-link ">
                Nosotros
              </Link>
            </li>
          </ul>
          <Filter />

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
