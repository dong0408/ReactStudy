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
    list: ["zs", "ls", "ww"],
    // }
  };
  render() {
    return (
      <div>
        <h1>跟组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <ul>
          {this.state.list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        {/* <button onClick={() => this.handeleClick()}>+1</button> */}
        {/* <button onClick={this.handeleClick.bind(this)}>+1</button> */}
        <button onClick={this.handeleClick}>+1</button>
        <button onClick={this.addList}>add</button>
      </div>
    );
  }
  handeleClick = () => {
    console.log("点击事件", this);
    this.setState({
      count: this.state.count + 1,
    });
  };
  addList = () => {
    this.setState({
      list: [...this.state.list, "zl"],
    });
  };
}
// const element = <App></App>;
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(<App></App>, document.getElementById("root"));
