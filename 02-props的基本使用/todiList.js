


import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: "ls",
        content: "jkl",
      },
      {
        id: 2,
        name: "zs",
        content: "12e",
      },
      {
        id: 3,
        name: "bn",
        content: "jsskl",
      },
    ],
    name: "",
    content: "",
  };
  render() {
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.state.content}
            onChange={this.handleChange}
            name="content"
          />
          <br />
          <button onClick={this.handleAdd}>发表评论</button>
          <button onClick={this.handleClear}>清空评论</button>
        </div>
        {/* {this.state.list.length === 0 ? (
          <div className="no-comment">暂无评论</div>
        ) : (
          <ul>
            {this.state.list.map((item) => (
              <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
                <button>删除</button>
              </li>
            ))}
          </ul>
        )} */}
        {this.renderList()}
      </div>
    );
  }

  renderList() {
    if (this.state.list.length === 0) {
      return <div className="no-comment">暂无评论</div>;
    }
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
            <button onClick={() => this.del(item.id)}>删除</button>
            {/* <button onClick={ this.del.bind(this,item.id)}>删除</button> */}
          </li>
        ))}
      </ul>
    );
  }
  handleClear = () => {
    this.setState({
      list: [],
    });
  };
  del = (id) => {
    console.log(id);
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleAdd = () => {
    const { name, content, list } = this.state;
    if (!name || !content) {
      return alert("信息不完整");
    }
    this.setState({
      list: [
        {
          id: Date.now(),
          name,
          content,
        },
        ...list,
      ],
      name: "",
      content: "",
    });
  };
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById("root"));

