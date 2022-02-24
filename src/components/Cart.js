import { useContext } from "react";
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
        {prueba.cartList.length > 0 ? (
          <button onClick={prueba.removeList}>
            Borrar todos los productos
          </button>
        ) : (
          <h2>Tu carrito esta vacio</h2>
        )}

        <div className="cardDetailInfo">
          {prueba.cartList.length > 0 &&
            prueba.cartList.map((item) => (
              <>
                <div className="detailProduct">
                  <p key={item.idItem}></p>
                  <img src={item.imgItem} alt="Imagen" />
                  <span>
                    <b> Producto:</b> {item.nameItem}
                  </span>
                  <button
                    className="eliminarItem"
                    onClick={() => prueba.deleteItem(item.idItem)}
                  >
                    Borrar producto
                  </button>
                </div>
                <div className="priceDetail">
                  <p>{item.qtyItem} item(s)</p>
                  <p>${item.precio} pesos</p>
                </div>
                <div className="productPrice">
                  $ {prueba.calculoTotalPorItem(item.idItem)}
                </div>
              </>
            ))}

          {prueba.cartList.length > 0 && (
            <>
              <p>Orden de compra</p>
              <p> number={prueba.calculoSubTotal()}</p>
              <p>Total: number={prueba.calculoTotal()}</p>

              <button>Finalizar Compra</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
