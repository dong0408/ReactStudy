import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
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
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          name="username"
        />

        <h3>文本域</h3>
        <div>
          描述：
          <textarea
            value={this.state.desc}
            cols="30"
            rows="10"
            onChange={this.handleChange}
            name="desc"
          ></textarea>
        </div>
        <h3>下拉框</h3>
        <select
          value={this.state.cite}
          onChange={this.handleChange}
          name="cite"
        >
          <option value="1">22</option>
          <option value="2">33</option>
          <option value="3">44</option>
          <option value="4">55</option>
          <option value="5">66</option>
        </select>

        <h3>
          <div>
            <input
              type="checkbox"
              checked={this.state.agree}
              onChange={this.handleChange}
              name="agree"
            />
            是否同意
          </div>
        </h3>
      </div>
    );
  }

  handleChange = (e) => {
    console.log("123");
    const { name, type } = e.target;
    console.log(name);
    this.setState({
      [name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
}
// const element = <App></App>;
//参数1：渲染的react元素
//参数2 需要渲染到那个容器中
ReactDOM.render(<App></App>, document.getElementById("root"));
