const ItemListContainer = () => {
  return (
    <>
      <h1>Contenedor de productos</h1>
      <div className="cardProduct">
        <div className="card__image">
          <p>PRODUCTO NUMERO 1 </p>
          <img
            src="images/lapiceras/penCircle.jpg"
            alt="Circulo de Lapiceras artesanales"
            className="card__menu"
          />
          <p className="price">Precio: $150</p>
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
