import React from "react";
import ReactDOM from "react-dom";
const username = "zs";
const address = "上海";
const car = {
  brand: "玛莎拉蒂",
};
const age = 19;
const friends = ["奥迪", "大众"];
const fn = () => {
  return (
    <div>
      <p>aklgo</p>
      <p>kashago</p>
    </div>
  );
};
//参数1.标签的名字h1 p div
//参数2标签的属性 对象
//参数3 标签的内容
const element = (
  <div>
    <h1>JSX的表达式</h1>
    <div>姓名：{username + "法外狂徒"}</div>
    <div>地址：{address + "浦东"}</div>
    <div>车{car.brand + "M#"}</div>
    <div>车的品牌{friends[0] + "A6"}</div>
    <div title={car.brand}>爱好{age > 18 ? "成年" : "未成年"}</div>
    <div>{fn()}</div>
  </div>
);

//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(element, document.getElementById("root"));
