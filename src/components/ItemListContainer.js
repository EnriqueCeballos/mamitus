import ItemCount from "./ItemCount";

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
          <ItemCount stock="5" initial="1" />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
