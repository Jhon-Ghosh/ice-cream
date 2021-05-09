import React, { Component } from "react";
import Builder from "../../FunctionalComponent/Builder/Builder";
import Icecream from "../../FunctionalComponent/IceCream/IceCream";
import IcecreamStyle from "./IcecreamBuilder.module.css";

export default class IcecreamBuilder extends Component {
  state = {
    items: {},
    scoops: [],
    totalPrice: 0,
  };

  componentDidMount() {
    fetch("https://react-icecream-4ed42-default-rtdb.firebaseio.com/items.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
        });
      });
  }

  addScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoop = [...scoops];
    workingScoop.push(scoop);
    this.setState((prevState) => {
      return {
        scoops: workingScoop,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  };

  removeScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoop = [...scoops];

    const scoopIndex = workingScoop.findIndex((item) => item === scoop);
    if (scoopIndex > -1) {
      workingScoop.splice(scoopIndex, 1);

      this.setState((prevState) => {
        return {
          scoops: workingScoop,
          totalPrice: prevState.totalPrice - items[scoop],
        };
      });
    } else {
      alert(
        `${
          scoop.charAt(0).toUpperCase() + scoop.slice(1)
        } is not added yet !!! `
      );
    }
  };

  render() {
    const { items, totalPrice, scoops } = this.state;
    return (
      <div className={["container", IcecreamStyle.container].join(" ")}>
        <Icecream scoops={scoops} />
        <Builder
          items={items}
          price={totalPrice}
          add={this.addScoop}
          remove={this.removeScoop}
          scoops={scoops}
        />
      </div>
    );
  }
}
