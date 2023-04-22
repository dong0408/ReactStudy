import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import My from "./components/My";
import Friend from "./components/Friend";
class App extends Component {
  state = {
    currentHash: "",
  };
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      console.log("hash变了", window.location.hash);
      this.setState({
        currentHash: window.location.hash.slice(1),
      });
    });
  }
  render() {
    const { currentHash } = this.state;
    return (
      <div>
        1q2F
        <h1>app组件</h1>
        <ul>
          <li>
            <a href="#/home">首页</a>
          </li>
          <li>
            <a href="#/my">我的</a>
          </li>
          <li>
            <a href="#/friend">朋友</a>
          </li>
        </ul>
        {currentHash === "/home" && <Home></Home>}
        {currentHash === "/my" && <My></My>}
        {currentHash === "/friend" && <Friend></Friend>}
      </div>
    );
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
