import React from "react";
import Badge from "@material-ui/core/Badge";

const CartWidget = () => {
  return (
    <Badge badgeContent={0} color="secondary">
      <img src={"../img/shopping-bag.png"} alt="Shopping Bag" />
    </Badge>
  );
};

export default CartWidget;
