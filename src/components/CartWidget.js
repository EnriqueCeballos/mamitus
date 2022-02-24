import React from "react";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const prueba = useContext(CartContext);
  return (
    <Badge badgeContent={prueba.calculoItemSQty(0)} color="secondary">
      <div className="buy">
        <Link to="/cart">
          <img src={`/img/icon/shopping-bag.png`} alt="Shopping Bag" />
        </Link>
      </div>
    </Badge>
  );
};

export default CartWidget;
