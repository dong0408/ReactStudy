

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(){

    super()
    this.state={
      msg:'hello',
      count:0

    }
  }
  render() {
    return (
      <div>
        <h1>跟组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
      </div>
    );
  }
}
// const element = <App></App>;
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(<App></App>, document.getElementById("root"));