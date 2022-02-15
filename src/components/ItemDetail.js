import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <>
      <div className="detailsItemsCard">
        <div className="imagenDetails">
          <img
            src={item.img}
            alt="Imagenes varias"
            className="cardImgDetails"
          />
        </div>
        <div className="textDetails">
          <p className="nameProductDetails">{item.nombre}</p>
          <p className="detailsProduct">{item.descripcion}</p>
          <p className="priceProductDetails">Precio: ${item.precio}</p>
        </div>
        <div className="buyNow">
          <ItemCount stock="5" initial="1" />
        </div>
      </div>
    </>
  );
}
export default ItemDetail;
