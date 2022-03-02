import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const prueba = useContext(CartContext);

  return (
    <>
      <div className="cartPage">
        <Link to={"/"}>
          <button>Continuar comprando</button>
        </Link>

        <h1>CARRITO DE COMPRAS</h1>

        {prueba.listaDelCarrito.length > 0 ? (
          <button onClick={() => prueba.removeList()}>
            Borrar todos los productos
          </button>
        ) : (
          <h2>Tu carrito esta vacio</h2>
        )}

        <div className="cardDetailInfo">
          {prueba.listaDelCarrito.length > 0 && (
            <>
              {prueba.listaDelCarrito.map((item) => (
                <div className="detailProduct">
                  <p key={item.idItem}></p>
                  <img
                    className="cardImgDetails"
                    src={item.imgItem}
                    alt="Imagen"
                  />
                  <div className="otherInfo">
                    <span>
                      <b> Producto:</b> {item.nameItem}
                    </span>
                    <button
                      className="eliminarItem"
                      onClick={() => prueba.deleteItem(item.idItem)}
                    >
                      Borrar producto
                    </button>
                    <div className="priceDetail">
                      <p>{item.qtyItem} item(s)</p>
                      <p>${item.precio} pesos</p>
                      <p>${prueba.calculoTotalPorItem(item.idItem)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="totalPrice">
                <p>Orden de compra</p>
                <p>SubTotal: {prueba.calculoSubTotal()}</p>
                <p>Total: {prueba.calculoTotal()}</p>

                <button>Finalizar Compra</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
