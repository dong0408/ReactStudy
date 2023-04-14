import React from "react";
import ReactDOM from "react-dom";

//参数1.标签的名字h1 p div
//参数2标签的属性 对象
//参数3 标签的内容
const element = React.createElement(
  "div",
  { id: "demo", className: "aa" },
  "我是一个盒子"
);

//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));
