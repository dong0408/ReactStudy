import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import My from "./components/My";
import Friend from "./components/Friend";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import "./index.css";
// link导航连接，route:指定路由规则
class App extends Component {
  state = {
    currentHash: "",
  };
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      console.log("hash变了", window.location.hash);
      this.setState({
        currentHash: window.location.hash.slice(1),
      });
    });
  }
  render() {
    // const { currentHash } = this.state;
    return (
      <Router>
        <div>
          1q2F
          <h1>app组件</h1>
          <ul>
            <li>
              <NavLink to="/home">首页</NavLink>
            </li>
            <li>
              <NavLink to="/my">我的</NavLink>
            </li>
            <li>
              <NavLink to="/friend">朋友</NavLink>
            </li>
          </ul>
          <Routes>
            {" "}
            <Route path="/home" Component={Home}></Route>{" "}
          </Routes>
          <Routes>
            {" "}
            <Route path="/my" Component={My}></Route>
          </Routes>
          <Routes>
            {" "}
            <Route path="/friend" Component={Friend}></Route>
          </Routes>
          {/* {currentHash === "/home" && <Home></Home>}
        {currentHash === "/my" && <My></My>}
        {currentHash === "/friend" && <Friend></Friend>} */}
        </div>
      </Router>
    );
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
