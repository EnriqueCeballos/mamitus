import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [item, setItem] = useState(0);
  let [buttonActive, setButton] = useState(true);

  useEffect(() => {
    setItem(0);
  }, []);

  const increment = () => {
    if (item < stock) {
      setItem(item + 1);
    } else {
      setButton(false);
    }
  };

  const decrement = () => {
    if (item > 0 && item <= stock) {
      setItem(item - 1);
      setButton(true);
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
