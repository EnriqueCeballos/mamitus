import Item from "./Item.js";

const ItemList = ({ items }) => {
  return (
    <div className="galleryProduct">
      {items.length > 0 ? (
        items.map((item) => <Item item={item} key={item.id}></Item>)
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};
export default ItemList;
