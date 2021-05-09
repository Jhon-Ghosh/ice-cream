import React from "react";
import IcecreamBuilder from '../../ClassComponent/IcecreamBuilder/IcecreamBuilder';
import BodyStyle from "./body.module.css";

const Body = () => {
  return <div className={BodyStyle.mainBody}>
    <IcecreamBuilder />
  </div>;
};

export default Body;
