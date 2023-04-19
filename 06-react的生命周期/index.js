import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Child from "./Child";
class App extends Component {
  constructor() {
    super();
    console.log("1", "constructor");
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("2", "render");
    return (
      <div>
        1q2F
        <button onClick={this.handleClick}>+!</button>
        {this.state.count < 6 && <Child count={this.state.count}></Child>}
        <div>{this.state.count}</div>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log("3", "componentDidMount");
  }
  componentDidUpdate() {
    console.log("4", "componentDidUpdate");
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
