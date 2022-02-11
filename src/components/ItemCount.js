import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
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

  return (
    <>
      <div className="itemsCountButtoms">
        <button className="minusButton" onClick={decrement}>
          <i className="fa-regular fa-circle-minus"></i>
        </button>
        <p>{item}</p>
        <button
          className="plusButton"
          disabled={!buttonActive}
          onClick={increment}
        >
          <i className="fa-circle-plus"></i>
        </button>
      </div>
      <div className="addBuy">Add to Cart</div>
    </>
  );
};

export default ItemCount;
