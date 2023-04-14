import React from "react";
import ReactDOM from "react-dom";
//参数1.标签的名字h1 p div
//参数2标签的属性 对象
//参数3 标签的内容
const element = (
  <div id="box">
    <h1>标题</h1>
    <ul>
      <li>orange</li>
      <li>apple</li>
    </ul>
  </div>
);

//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));
