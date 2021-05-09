import React from "react";
import Item from "./Item/Item";

const Items = ({ items, add, remove, price, scoops }) => {
  const itemArray = Object.keys(items);
  const itemPriceArray = Object.values(items);
  return (
    <div>
      <ul>
        {itemArray.map((item, index) => (
          <Item
            key={item}
            itemName={item}
            itemPrice={itemPriceArray[index]}
            add={add}
            remove={remove}
            price={price}
            scoops={scoops}
          />
        ))}
      </ul>
    </div>
  );
};

export default Items;
