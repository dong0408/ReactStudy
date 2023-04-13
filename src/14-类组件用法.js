import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    return <div>hello组件</div>;
  }
}

const element = (
  <div>
    <h1>函数组件</h1>
    <Hello></Hello>
  </div>
);
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));
