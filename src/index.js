import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
class App extends Component {
  state = {
    count: 0,
    isShow: false,
  };
  inputRef = React.createRef();
  render() {
    return (
      <div>
        1q2F
        <button onClick={this.handleClick}>+!</button>
        <div>{this.state.count}</div>
        {this.state.isShow ? (
          <input type="text"    ref={this.inputRef}></input>
        ) : (
          <button onClick={this.hadleBtn}>发表评论</button>
        )}
      </div>
    );
  }
  handleClick = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  hadleBtn = () => {
    this.setState(
      {
        isShow: true,
      },
      () => {
        this.inputRef.current.focus();
      });
  };
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
