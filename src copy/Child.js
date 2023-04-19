import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return <div>Child-{this.props.count}</div>;
  }

  componentDidUpdate() {
    console.log("子组件按componentDidUpdate");
  }
  componentWillUnmount(){
    console.log('子组件componentWillUnmount');
  }
}
