import { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
class App extends Component {
  state = {
    name: "",
    sonName: "",
  };
  render() {
    return (
      <div>
        class组件
        <div>
          配偶:
          <input
            type="text"
            placeholder="请输入名字"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <Child name={this.state.name} changeName={this.changeName}></Child>
        <div>文字{this.state.sonName}</div>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeName = (name) => {
    console.log("接受", name);
    this.setState({
      sonName: name,
    });
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
