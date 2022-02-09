import { useState } from "react";

const buttonPlus = document.getElementsByClassName("plusButton");
const buttonMinus = document.getElementsByClassName("minusButton");

const ItemCount = ({ stock, initial }) => {
  const [item, setItem] = useState(1);
  const increment = () => {
    if (item <= stock) {
      setItem(item + 1);
    } else {
      buttonPlus.disabled = true;
    }
  };

  const decrement = () => {
    if (item > initial && item <= stock) {
      setItem(item - 1);
    } else {
      buttonMinus.disabled = false;
    }
  };

  return (
    <ItemCount>
      <div className="itemsCountButtoms">
        <buttom className="minusButton" onClick={increment}>
          <i class="fa-regular fa-circle-minus"></i>
        </buttom>
        <p>{item}</p>
        <buttom className="plusButton" onClick={decrement}>
          <i class=" fa-circle-plus"></i>
        </buttom>
      </div>
      <div className="addBuy">Add to Cart</div>
    </ItemCount>
  );
};

export default ItemCount;
