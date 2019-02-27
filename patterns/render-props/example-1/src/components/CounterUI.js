import React from "react";

export default ({ count, decrement, increment }) => (
  <div className="counter">
    <div className="counter__text-box">
      <h3 className="heading--h3">Counter using render Props</h3>
    </div>
    <div className="counter__box">
      <input className="counter__input" type="text" disabled={true} value={count} />
      <div className="counter__buttons">
        <button className="btn btn--white" onClick={() => decrement()}>
          Decrement
        </button>
        <button className="btn btn--white" onClick={() => increment()}>
          Increment
        </button>
      </div>
    </div>
  </div>
);
