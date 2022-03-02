import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  let buttonActive = true;
  const [item, setItem] = useState(0);

  useEffect(() => {
    setItem(0);
  }, []);

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
        <img
          src="../img/icon/minus.png"
          onClick={decrement}
          className="minusButton"
          alt="Boton -"
        ></img>

        <p className="itemCountP">{item}</p>
        <img
          src="../img/icon/plus.png"
          onClick={increment}
          className="plusButton"
          disabled={!buttonActive}
          alt="Boton +"
        ></img>
        <div className="addBuy" onClick={() => onAdd(item)}>
          <button className="addCart">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
