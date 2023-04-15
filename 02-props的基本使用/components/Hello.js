import { Component } from "react";

class Hello extends Component {
  render() {
    console.log(this, "hello");
    const { car, money, check } = this.props;
    return (
      <div>
        class组件\
        <p> {car} </p>
        <p> {money} </p>
        <p> {check} </p>
      </div>
    );
  }
}
export default Hello;
