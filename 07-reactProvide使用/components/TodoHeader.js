import { Component } from "react";

class TodoHeader extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.name}
          onChange={this.changeName}
          onKeyUp={this.addTodo}
        />
      </header>
    );
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  addTodo = (e) => {
    if (e.keyCode !== 13) return;
    if (!this.state.name.trim()) {
      return alert("不能为空");
    }
    this.props.addTodo(this.state.name);
    this.setState({
      name: "",
    });
  };
}
export default TodoHeader;
