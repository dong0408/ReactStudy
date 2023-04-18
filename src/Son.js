import React, { Component } from "react";
import GrandSon from "./GrandSon";
export default class Son extends Component {
  render() {
    return (
      <div>
       <h3>儿子组件</h3> 
        <GrandSon></GrandSon>
      </div>
    );
  }
}
