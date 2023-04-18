import { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/index.css";
import Jack from "./Jack";
import Rose from "./Rose";
class App extends Component {
  state = {
    msg: "",
  };
  render() {
    return (
      <div>
        app组件
        <Jack msg={this.state.msg} say={this.changeMsg}></Jack>
        <Rose msg={this.state.msg}></Rose>
      </div>
    );
  }
  changeMsg = (msg) => {
    this.setState({
      msg: msg,
    });
  };
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
