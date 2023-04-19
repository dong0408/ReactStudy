import React, { Component } from "react";
import { Consumer } from "./index";
// const { Consumer } = React.createContext();
export default class grandSon extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) => <h5 style={{ color: value }}>孙子组件---{value}</h5>}
        </Consumer>
      </div>
    );
  }
}
