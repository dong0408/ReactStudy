import React from "react";
import ReactDOM from "react-dom";

import Demo from "./components/Demo";
import Hello from "./components/Hello";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> App组件</h1>
        <Demo car="宝马" money={100} check={true}></Demo>
        <Hello car="特斯拉" money={88} check={false}></Hello>
      </div>
    );
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById("root"));
