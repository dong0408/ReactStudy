import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/index.css";
import MySon from "./MySon";

class App extends Component {
  state = {
    car: {
      brand:' 10ewdew0',
      price: 100,
    },
  };
  render() {
    return (
      <div>
        <MySon money="100" list={[]} car={this.state.car}></MySon>
      </div>
    );
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
