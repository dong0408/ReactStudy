import React from "react";
import ReactDOM from "react-dom";

import Demo from "./components/Demo";
// import Hello from "./components/Hello";
import "./index.css";
import Hello from "./components/Hello";

class App extends React.Component {
  state = {
    money: 100,
  };
  render() {
    return (
      <div>
        <h1> App组件</h1>
        <button onClick={this.buy}>按钮</button>
        <Demo
          car="宝马"
          money={this.state.money}
          check={true}
          fn={() => {
            console.log("fn函数");
          }}
          list={[1, 2, 3]}
          user={{ name: "ss", age: 18 }}
        ></Demo>
        <Hello money={this.state.money}></Hello>
      </div>
    );
  }
  buy = () => {
    this.setState({
      money: this.state.money - 1,
    });
  };
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById("root"));
