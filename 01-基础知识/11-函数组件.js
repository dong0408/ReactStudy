import React from "react";
import ReactDOM from "react-dom";

function Hello() {
  return <div>hello组件</div>;
}
const HI = () => {
  return <div>hi组件</div>;
};
const element = (
  <div>
    <h1>函数组件</h1>
    <Hello></Hello>
    <HI></HI>
  </div>
);
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));
