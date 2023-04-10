import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
          />
          <br />
          <button>发表评论</button>
          <button>清空评论</button>
        </div>
        <ul>
          <li>
            <h3>评论人：刘德华</h3>
            <p>评论内容：冰雨</p>
            <button>删除</button>
          </li>
        </ul>
        <div className="no-comment">暂无评论</div>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
