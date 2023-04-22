import React, { Component } from "react";
import Rank from "./Rank";
import SongList from "./SongList";
import { Link, Route, Routes } from "react-router-dom";
export default class My extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {" "}
            <Link to="/my/rank">排行榜</Link>
          </li>
          <li>
            <Link to="/my/songList">歌单</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/my/rank" Component={Rank}></Route>
        </Routes>
        <Routes>
          <Route path="/my/songList" Component={SongList}></Route>
        </Routes>
      </div>
    );
  }
}
