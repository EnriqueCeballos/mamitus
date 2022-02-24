import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let busqueda = cartList.find((producto) => producto.item === item.id);
    if (busqueda === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.img[0],
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
    setCartList([]);
  };
  const deleteItem = (id) => {
    let resultado = cartList.filter((item) => item.idItem !== id);
    setCartList(resultado);
  };
  const calculoTotalPorItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].precio * cartList[index].qtyItem;
  };

  const calculoSubTotal = () => {
    let totalPorItem = cartList.map((item) => calculoTotalPorItem(item.idItem));
    return totalPorItem.reduce(
      (valorPrevio, valorActual) => valorPrevio + valorActual
    );
  };
  const calculoTotal = () => {
    return calculoSubTotal();
  };
  const calculoItemSQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (valorPrevio, valorActual) => valorPrevio + valorActual,
      0
    );
  };
  return (
    <CartContext.Provider
      value={[
        cartList,
        addToCart,
        removeList,
        deleteItem,
        calculoTotalPorItem,
        calculoSubTotal,
        calculoTotal,
        calculoItemSQty,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
