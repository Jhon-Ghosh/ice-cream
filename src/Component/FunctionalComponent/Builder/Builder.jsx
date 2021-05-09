import React from "react";
import BuilderStyle from "./Builder.module.css";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = ({ items, price, add, remove, scoops }) => {
  return (
    <div className={BuilderStyle.builder}>
      <h3>Build your own Ice Cream</h3>
      <Items items={items} add={add} remove={remove} price={price} scoops={scoops} />
      <TotalPrice price={price} />
      <button
        type="button"
        className={[BuilderStyle.order, "rounded"].join(" ")}
      >
        Add to Cart
      </button>
      <Modal>Hello</Modal>
    </div>
  );
};

export default Builder;
