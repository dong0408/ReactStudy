import React, { Component } from "react";

export default class Jack extends Component {
  render() {
    return (
      <div>
        <h3>我是Jack组件----{this.props.msg}</h3>
        <button onClick={this.handleClick}>说</button>
      </div>
    );
  }
  handleClick = () => {
    this.props.say("rose,爱老虎油");
  };
}
