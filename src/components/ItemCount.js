import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  let buttonActive = true;
  const [item, setItem] = useState(0);

  useEffect(() => {
    setItem(initial);
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
  const agregar = () => {
    onAdd(item);
    // mostrarAlertaCompra();
  };
  // let compraProducto = document.getElementsByClassName("compraProducto");

  // function mostrarAlertaCompra() {
  //   compraProducto = "";
  //   compraProducto.prepend(`

  //       <p>
  //       <img class="iconoAprobar" src="/img/iconos/aprobar.png" alt="" />
  //       Se agrego el producto al carrito
  //       </p>`);

  //   compraProducto.fadeIn(1500, function () {
  //     compraProducto.fadeOut(1500);
  //   });
  // }

  return (
    <>
      <div className="itemsCountButtoms">
        <img
          src="./img/icon/minus.png"
          onClick={decrement}
          className="minusButton"
          alt="Boton -"
        ></img>

        <p className="itemCountP">{item}</p>
        <img
          src="./img/icon/plus.png"
          onClick={increment}
          className="plusButton"
          disabled={!buttonActive}
          alt="Boton +"
        ></img>
        <div className="addBuy" onClick={agregar}>
          <button className="addCart">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
