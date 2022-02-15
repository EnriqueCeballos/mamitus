import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  let buttonActive = true;
  const [item, setItem] = useState(1);
  const increment = () => {
    if (item < stock) {
      setItem(item + 1);
    } else {
      buttonActive = false;
    }
  };

  const decrement = () => {
    if (item > initial && item <= stock) {
      setItem(item - 1);
    }
  };
  onAdd = () => {
    console.log("Se agrego un producto al carrito");
  };

  return (
    <>
      <div className="itemsCountButtoms">
        <img
          src="./img/icon/minus.png"
          onClick={decrement}
          className="minusButton"
        ></img>

        <p className="itemCountP">{item}</p>
        <img
          src="./img/icon/plus.png"
          onClick={increment}
          className="plusButton"
          disabled={!buttonActive}
        ></img>
        <div className="addBuy" onClick={onAdd}>
          <p>Add to Cart</p>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
