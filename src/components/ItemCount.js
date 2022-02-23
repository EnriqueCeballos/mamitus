import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  let buttonActive = true;
  const [item, setItem] = useState(parseInt(initial));
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
  const agregar = () => {
    onAdd(item);
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
        <div className="addBuy" onClick={agregar}>
          <button className="addCart">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
