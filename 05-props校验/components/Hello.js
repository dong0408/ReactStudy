import { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: this.props.money + 100,
    };
  }
  render() {
    console.log(this, "hello");
    return (
      <div>
        class组件\
        <div>{this.state.money}</div>
      </div>
    );
  }
}
export default Hello;
