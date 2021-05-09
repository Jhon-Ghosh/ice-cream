import React from "react";
import ScopeStyle from "./Scope.module.css";

const scope = ({ item }) => {
  return <div className={[ScopeStyle.scoop, ScopeStyle[item]].join(" ")}></div>;
};

export default scope;
