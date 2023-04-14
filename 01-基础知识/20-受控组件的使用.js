import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    msg: "hello world",
  };
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (e) => {
    console.log("123");
    this.setState({
      msg: e.target.value,
    });
  };
}
// const element = <App></App>;
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(<App></App>, document.getElementById("root"));
