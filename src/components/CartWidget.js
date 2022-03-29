import React from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const prueba = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="buy">
        <Badge badgeContent={prueba.calculoItemsQty()} color="secondary" />
        <LocalMallIcon></LocalMallIcon>
      </div>
    </Link>
  );
};

export default CartWidget;
