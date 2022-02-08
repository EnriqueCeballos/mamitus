const ItemListContainer = (gretting) => {
  return (
    <>
      <h1>Contenedor de productos</h1>
      <div className="cardProduct">
        <div className="card__image">
          <p>{gretting.tittle}</p>
          <img
            src={gretting.img}
            alt="Circulo de Lapiceras artesanales"
            className="card__menu"
          />
          <p className="price">Precio: {gretting.price}</p>
        </div>
        <div className="buyNow">
          <div className="textBuy">
            <a href="lapiceras.html">COMPRAR AHORA</a>
          </div>
          <div className="addBuy">
            <a href="lapiceras.html">
              <img src={"../img/icon/carritoAgregar.png"} alt="Carrito" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
