import ItemCount from "./ItemCount";

function Item({ item }) {
  return (
    <>
      <div className="cardProduct">
        <div className="imagen-producto">
          <img src={item.img} alt="Imagenes varias" className="card_img" />
          {/* <p className="detailsProduct">{item.descripcion}</p> */}
          <p className="nameProduct">{item.nombre}</p>
          <p className="priceProduct">Precio: ${item.precio}</p>
        </div>
        <div className="buyNow">
          <div className="textBuy">
            <a href="a.html">DETALLES</a>
          </div>
        </div>
        <ItemCount stock="5" initial="1" />
      </div>
    </>
  );
}
export default Item;
