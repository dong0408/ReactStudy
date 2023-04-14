import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  txtRef = React.createRef();
  state = {
    username: "",
    desc: "",
    cite: 3,
    agree: true,
  };
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <input type="text"  ref={this.txtRef} />
        <button onClick={this.clickFn}>获取值</button>
      </div>
    );
  }

  clickFn = () => {
    console.log(this.txtRef.current.value);
  };
}
// const element = <App></App>;
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(<App></App>, document.getElementById("root"));
