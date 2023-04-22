import React, { Component } from "react";
import classnames from "classnames";

export default class TodoItem extends Component {
  state = {
    currentId: "",
    currentName: "",
  };
  inputRef = React.createRef();
  render() {
    const { item } = this.props;
    console.log(item, "11");
    return (
      <li
        className={classnames({
          completed: item.done,
          editing: item.id === this.state.currentId,
        })}
        key={item.id}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.done}
            onChange={() => this.updateDone(item.id)}
          />
          <label onDoubleClick={() => this.showEdit(item)}>{item.name}</label>
          <button
            className="destroy"
            onClick={() => this.delete(item.id)}
          ></button>
        </div>
        <input
          className="edit"
          value={this.state.currentName}
          onChange={(e) => this.setState({ currentName: e.target.value })}
          onKeyUp={this.handleKeyUp}
          onBlur={() => this.setState({ currentId: "" })}
          ref={this.inputRef}
        />
      </li>
    );
  }
  delete = (id) => {
    console.log(id);
    this.props.deleteToById(id);
  };
  updateDone = (id) => {
    this.props.updateById(id);
  };
  showEdit = ({ id, name }) => {
    console.log(id);
    this.setState({
      currentId: id,
      currentName: name,
    });
  };
  handleKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        currentId: "",
        currentName: "",
      });
    }
    if (e.keyCode === 13) {
      this.props.editTodo(this.state.currentId, this.state.currentName);
      this.setState({
        currentId: "",
        currentName: "",
      });
    }
  };
  componentDidUpdate() {
    this.inputRef.current.focus();
  }
}
