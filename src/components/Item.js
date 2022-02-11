import ItemCount from "./ItemCount";

function Item({ item }) {
  return (
    <>
      <div className="cardProduct">
        <div className="imagen-producto">
          <p>{item.nombre}</p>
          <img src={item.img} alt="Imagenes varias" className="card__menu" />
          {/* <p className="detailsProduct">{item.descripcion}</p> */}
          <p className="price">Precio: ${item.precio}</p>
        </div>
        <div className="buyNow">
          <div className="textBuy">
            <a href="a.html">DETALLES</a>
          </div>
          <ItemCount stock="5" initial="1" />
        </div>
      </div>
    </>
  );
}
export default Item;
