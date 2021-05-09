import React from "react";
import IceCreamStyle from "./IceCream.module.css";
import Scope from "./Scope/Scope";

const IceCream = ({ scoops }) => {
  //const itemsArray = Object.keys(items.items)
  return (
    <div>
      <div className={IceCreamStyle.icecream}>
        <p className={IceCreamStyle.cone}></p>
        {/* {itemsArray.map((item) => (
          <Scope key={item} item={item} />
        ))} */}
        {scoops.map((scoop) => (
          <Scope key={`${scoop}${Math.random()}`} item={scoop} />
        ))}
        {scoops.length ? <div className={IceCreamStyle.cherry}></div> : null}
      </div>
    </div>
  );
};

export default IceCream;
