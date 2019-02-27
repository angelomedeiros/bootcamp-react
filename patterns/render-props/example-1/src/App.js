import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="render-props">
        <Counter />
      </div>
    );
  }
}

export default hot(module)(App);
