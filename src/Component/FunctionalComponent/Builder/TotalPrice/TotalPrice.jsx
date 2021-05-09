import React from "react";
import TotalPriceStyle from "./TotalPrice.module.css";

const TotalPrice = ({ price = 0 }) => {
  return (
    <div className={TotalPriceStyle.total}>
      <div>Total Price</div>
      <div>{price.toFixed(2)} Tk</div>
    </div>
  );
};

export default TotalPrice;
