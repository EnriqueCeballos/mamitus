import Modal from "./Modal";
import {
  doc,
  collection,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import db from "./utils/FirebaseConfig";

const Cart = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  const [orderValue, setOrderValue] = useState({});

  const prueba = useContext(CartContext);
  const createOrder = () => {
    let order = {
      buyer: {
        email: "juanperez_cb@gmail.com",
        name: "Juancito Perez",
        phone: "123456568",
      },
      items: prueba.listaDelCarrito.map((item) => {
        return {
          id: item.idItem,
          precio: item.precio,
          nombre: item.nameItem,
          QYT: item.qtyItem,
        };
      }),
      total: prueba.calculoTotal(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) => {
        setOrderValue({ ...order, id: result.id });
        setActive(true);

        prueba.listaDelCarrito.map(async (item) => {
          const itemRef = doc(db, "item", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem),
          });
        });
        prueba.removeList();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Link to={"/"}>
        <button className="buttonContinueShopping">
          ← Continuar comprando
        </button>
      </Link>

      <h1 className="tittleCartPage">CARRITO DE COMPRAS</h1>
      {prueba.listaDelCarrito.length > 0 ? (
        <button
          className="buttonClearItems"
          onClick={() => prueba.removeList()}
        >
          Eliminar todos los productos
        </button>
      ) : (
        <div className="emptyCart">
          <h2 className="emptyCartText"> 🛒 Tu carrito esta vacio</h2>
          <Link to={"/"}>
            <button className="buttonContinueShopping">Volver al inicio</button>
          </Link>
        </div>
      )}

      {prueba.listaDelCarrito.length > 0 && (
        <>
          <div className="cartPage">
            <div className="totalPrice">
              <h3>Orden de compra</h3>
              <p>Total: ${prueba.calculoTotal()}</p>
              <p>SubTotal: ${prueba.calculoSubTotal()}</p>

              <button className="buttonEndShopping" onClick={createOrder}>
                Finalizar Compra
              </button>
            </div>
            {prueba.listaDelCarrito.map((item) => (
              <div className="cardDetailInfo">
                <div className="detailProduct">
                  <p key={item.idItem}></p>
                  <img
                    className="cardImgDetails"
                    src={item.imgItem}
                    alt="Imagen"
                  />
                  <div className="otherInfo">
                    <span>
                      <p> Producto: {item.nameItem}</p>
                    </span>

                    <div className="priceDetail">
                      <p>Cantidad: {item.qtyItem} item(s)</p>
                      <p>Precio Unitario: ${item.precio} pesos</p>

                      <button
                        className="eliminarItem"
                        onClick={() => prueba.deleteItem(item.idItem)}
                      >
                        Borrar producto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Modal active={active} toggle={toggle}>
        <h3>Orden de compra</h3>
        <p>
          Tu ID de compra es: <strong>{orderValue.id}</strong>
        </p>
        <p>
          Nombre del comprador: <strong>{orderValue.buyer.name}</strong>
        </p>
        <p>
          Hemos enviado el comprobante de compra al email:
          <strong> {orderValue.buyer.email}</strong>
        </p>
      </Modal>
    </>
  );
};

export default Cart;
