import React, { Component } from "react";

export default class Dialog extends Component {
  render() {
    return (
      <div>
        <div className="title">
          {/* <h3>我是标题</h3> */}
          {this.props.title}
          <div className="content"> {this.props.children}</div>
          <div>
            <button>关闭</button>
            <button>确定</button>
          </div>
        </div>
      </div>
    );
  }
}
