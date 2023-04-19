import React, { Component } from "react";
import PropTypes from "prop-types";
export default class MySon extends Component {
  render() {
    return (
      <div>
        <div>我的金钱：{this.props.money + 100}</div>
        <div>
          {this.props.car.price}-{this.props.car.brand}{" "}
        </div>
        <ul>
          {this.props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
MySon.propTypes = {
  money: PropTypes.number,
  list: PropTypes.array,
  car: PropTypes.shape({
    brand: PropTypes.string,
    price: PropTypes.number,
  }),
};
