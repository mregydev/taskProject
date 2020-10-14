import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";
import { LightenDarkenColor } from "lighten-darken-color";

class Counter extends Component {
  render() {

    const { count } = this.props;

    const backgroundColor = !count ? "white" : count > 0 ? LightenDarkenColor("#C80000", count) : LightenDarkenColor("#009900", count)

    return (
      <div className="counter">
        <div style={{ backgroundColor }}>{count}</div>
        <Controls />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
