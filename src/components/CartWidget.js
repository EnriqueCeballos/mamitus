import React from "react";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Badge badgeContent={1} color="secondary">
      <div className="buy">
        <Link to="/cart">
          <img src={`/img/icon/shopping-bag.png`} alt="Shopping Bag" />
        </Link>
      </div>
    </Badge>
  );
};

export default CartWidget;
