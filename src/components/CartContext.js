import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [listaDelCarrito, setlistaDelCarrito] = useState([]);

  const addToCart = (item, qty) => {
    let busqueda = listaDelCarrito.find(
      (producto) => producto.idItem === item.id
    );
    if (busqueda === undefined) {
      setlistaDelCarrito([
        ...listaDelCarrito,
        {
          idItem: item.id,
          imgItem: item.img,
          nameItem: item.nombre,
          precio: item.precio,
          qtyItem: qty,
        },
      ]);
    } else {
      busqueda.qtyItem += qty;
    }
  };
  const removeList = () => {
    setlistaDelCarrito([]);
  };
  const deleteItem = (id) => {
    let resultado = listaDelCarrito.filter((item) => item.idItem !== id);
    setlistaDelCarrito(resultado);
  };
  const calculoTotalPorItem = (idItem) => {
    let index = listaDelCarrito.map((item) => item.idItem).indexOf(idItem);
    return listaDelCarrito[index].precio * listaDelCarrito[index].qtyItem;
  };

  const calculoSubTotal = () => {
    let totalPorItem = listaDelCarrito.map((item) =>
      calculoTotalPorItem(item.idItem)
    );
    return totalPorItem.reduce(
      (valorPrevio, valorActual) => valorPrevio + valorActual
    );
  };
  const calculoTotal = () => {
    return calculoSubTotal();
  };
  const calculoItemsQty = () => {
    let qtys = listaDelCarrito.map((item) => item.qtyItem);
    return qtys.reduce(
      (valorPrevio, valorActual) => valorPrevio + valorActual,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        listaDelCarrito,
        addToCart,
        removeList,
        deleteItem,
        calculoTotalPorItem,
        calculoSubTotal,
        calculoTotal,
        calculoItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
