import Item from "./Item.js";

const ItemList = ({ items }) => {
  return (
    <div className="galleryProduct">
      {items.map((item) => (
        <Item item={item} key={item.id}></Item>
      ))}
    </div>
  );
};
export default ItemList;
