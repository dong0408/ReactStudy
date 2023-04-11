import React from "react";
import ReactDOM from "react-dom";
const loading = true;
// function render() {
//   if (loading) {
//     return <div>数据加载中...</div>;
//   } else {
//     return <div> 数据加载完成</div>;
//   }
// }
const element = <div>{loading && <div>数据加载中</div>}</div>;

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
