import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo";
import Hello from "./components/Hello";

const element = (
  <div>
    <h1>函数组件</h1>
    <Hello></Hello>
    <Demo></Demo>
  </div>
);
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));
