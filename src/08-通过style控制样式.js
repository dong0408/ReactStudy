import React from "react";
import ReactDOM from "react-dom";
const list = [
  { id: 1, name: "奥迪" },
  { id: 2, name: "宝马" },
  { id: 3, name: "奔驰" },
];

// const list1 = ["a", "b", "c"];

// const arr = list.map((item) => {
//   return <li></li> <li>{item.name}</li>;
// });
const color = "red";
const bgColor = "pink";
const element = (
  <div>
    <h1 style={{ backgroundColor: bgColor, width: 400, height: 400 }}>
      通过style控制
    </h1>
    <ul>
      {list.map((item, index) => (
        <li key={index} style={{ color}}>
          <p>{item.name}</p>
          <p>{item.id}</p>
        </li>
      ))}
    </ul>
  </div>
);

//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));

//react18写法
// import { createRoot } from "react-dom/client";
// const loading = false;

// const element = <div>{loading && <div>数据加载中建立健康</div>}</div>;

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(element);
