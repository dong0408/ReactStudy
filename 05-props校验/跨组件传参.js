import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/index.css";
import Father from "./Father";



const { Provider,Consumer } = React.createContext();
export { Consumer };
class App extends Component {
  state = {
    color: "red",
  };
  render() {
    return (
      <Provider value={this.state.color}>
        <div>
          <Father></Father>
        </div>
      </Provider>
    );
  }
  changeMsg = (msg) => {
    this.setState({
      msg: msg,
    });
  };
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
