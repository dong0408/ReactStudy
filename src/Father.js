import React, { Component } from "react";
import Son from "./Son";

export default class Father extends Component {
  render() {
    return (
      <div>
        <h1> Father组件</h1>
        <Son></Son>
      </div>
    );
  }
}
