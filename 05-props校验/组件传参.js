import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/index.css";
import Dialog from "./Dialog";

class App extends Component {
  state = {
    color: "red",
  };
  render() {
    return (
      <div>
        <Dialog title={<h4>温馨提示</h4>}>
          <input type="text" />
        </Dialog>
      </div>
    );
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
