import { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles/base.css";
import "./styles/index.css";
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
class App extends Component {
  state = {
    list: [
      { id: 1, name: "吃饭", done: false },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "打游戏", done: true },
    ],
    type: "all",
  };
  render() {
    const { list, type } = this.state;
    return (
      <div>
        <section className="todoapp">
          <TodoHeader addTodo={this.addTodo}></TodoHeader>
          <TodoMain
            list={list}
            deleteToById={this.deleteToById}
            updateById={this.updateById}
            editTodo={this.editTodo}
            checkAll={this.checkAll}
            type={type}
          ></TodoMain>
          <TodoFooter
            list={list}
            clearTodo={this.clearTodo}
            type={type}
            changeType={this.changeType}
          ></TodoFooter>
        </section>
      </div>
    );
  }
  deleteToById = (id) => {
    this.setState({ list: this.state.list.filter((item) => item.id !== id) });
  };
  updateById = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      }),
    });
  };
  addTodo = (name) => {
    console.log(name);

    this.setState({
      list: [
        {
          id: Date.now(),
          name,
          done: false,
        },
        ...this.state.list,
      ],
    });
  };
  editTodo = (id, name) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name,
          };
        } else {
          return item;
        }
      }),
    });
  };
  clearTodo = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.done),
    });
  };
  changeType = (type) => {
    this.setState({ type });
  };
  checkAll = (check) => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: check,
        };
      }),
    });
  };
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
