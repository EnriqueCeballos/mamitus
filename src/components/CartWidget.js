import React from "react";
import Badge from "@material-ui/core/Badge";

const CartWidget = () => {
  return (
    <Badge badgeContent={1} color="secondary">
      <div className="buy">
        <img src={`/img/icon/shopping-bag.png`} alt="Shopping Bag" />
      </div>
    </Badge>
  );
};

export default CartWidget;
