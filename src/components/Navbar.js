import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";

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
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={"/categoria/redondas"} className="dropdown-item">
                    Alfombras Redondas
                  </Link>
                </li>
                <li>
                  <Link to={"/categoria/cuadradas"} className="dropdown-item">
                    Alfombras Cuadradas
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/categoria/basicas"} className="dropdown-item">
                    Alfombras Basicas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link ">
                Nosotros
              </Link>
            </li>
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
