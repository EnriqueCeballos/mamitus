import productos from "./product";

const Filter = () => {
  const busquedaFiltro =
    document.getElementsByClassName(`.form-control me-2`).value;

  const search = () => {
    if (!busquedaFiltro) {
      productos = [...productos];
    } else {
      productos = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busquedaFiltro.toLowerCase())
      );
    }

    //   if (filtroOrdCat) {
    //     listaProductos = listaProductos.filter(
    //       (producto) =>
    //         producto.categoria.toLowerCase() === filtroOrdCat.toLowerCase()
    //     );
    //   }
  };
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={search}
      >
        Buscar
      </button>
    </form>
  );
};

export default Filter;
