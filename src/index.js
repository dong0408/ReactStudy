import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
class App extends Component {
  render() {
    return (
      <div>
        1q2F
        <button onClick={this.handleClick}>+!</button>
      </div>
    );
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
