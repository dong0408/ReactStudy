import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  // constructor(){

  //   super()
  //   this.state={
  //     msg:'hello',
  //     count:0

  //   }
  state = {
    msg: "hello",
    count: 0,
    // }
  };
  render() {
    return (
      <div>
        <h1>跟组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        {/* <button onClick={() => this.handeleClick()}>+1</button> */}
        {/* <button onClick={this.handeleClick.bind(this)}>+1</button> */}
        <button onClick={this.handeleClick}>+1</button>
      </div>
    );
  }
  handeleClick = () => {
    console.log("点击事件", this);
  };
}
// const element = <App></App>;
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(<App></App>, document.getElementById("root"));
