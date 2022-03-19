import { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [item, setItem] = useState(0);
  let [buttonActive, setButton] = useState(true);

  useEffect(() => {
    setItem(0);
  }, []);

  const increment = () => {
    if (item <= stock) {
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
        <RemoveCircleIcon
          onClick={decrement}
          className="minusButton"
          alt="Boton -"
        ></RemoveCircleIcon>

        <p className="itemCountP">{item}</p>
        <AddCircleIcon
          onClick={increment}
          className="plusButton"
          disabled={!buttonActive}
          alt="Boton +"
        ></AddCircleIcon>
        <div className="addBuy" onClick={() => onAdd(item)}>
          <button className="addCart">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
