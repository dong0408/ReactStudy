import { Component } from "react";

class Child extends Component {
  state = {
    mySonName: "",
  };
  render() {
    return (
      <div>
        <h3>子组件</h3>
        <div>名字:{this.props.name}</div>
        <div>
          <h2>子组件qww</h2>
          <input
            type="text"
            placeholder="请输入名字"
            value={this.state.mySonName}
            onChange={this.handleChange}
          ></input>
        </div>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({
      mySonName: e.target.value,
    });
    this.props.changeName(e.target.value);
  };
}

export default Child;
