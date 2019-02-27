import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };

  render() {
    const { decrement, increment } = this;
    const { count } = this.state;
    const { render } = this.props;

    return <Fragment>{render({ decrement, increment, count })}</Fragment>;
  }
}

export default Counter;
