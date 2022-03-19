import React from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const prueba = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="buy">
        <LocalMallIcon
          bagdeContent={prueba.calculoItemsQty()}
          color="secondary"
        ></LocalMallIcon>
      </div>
    </Link>
  );
};

export default CartWidget;
