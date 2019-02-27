import React, { Component, Fragment } from "react";
import CounterUI from "./CounterUI";
import CounterWrapper from "./CounterWrapper";

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <CounterWrapper render={CounterUI} />
      </Fragment>
    );
  }
}

export default Counter;
