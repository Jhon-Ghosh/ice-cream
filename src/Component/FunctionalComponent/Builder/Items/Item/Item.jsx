import React from "react";
import ItemStyle from "./Item.module.css";

const Item = ({ itemName, itemPrice, add, remove, price, scoops = {} }) => {
  let counts = {};
  scoops.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  return (
    <li className={ItemStyle.item}>
      <span>{itemName.charAt(0).toUpperCase() + itemName.slice(1)}</span>
      <span className={ItemStyle.quantity}>{itemPrice}</span>
      {counts[itemName] > 0 ? (
        <span className={ItemStyle.quantity}>{counts[itemName]}</span>
      ) : null}

      <div className="right">
        <button
          type="button"
          onClick={add.bind(this, itemName)}
          className={[ItemStyle.plus, "rounded"].join(" ")}
        >
          +
        </button>
        <button
          type="button"
          onClick={remove.bind(this, itemName)}
          className={[ItemStyle.minus, "rounded"].join(" ")}
          disabled={price <= 0 ? true : false}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
