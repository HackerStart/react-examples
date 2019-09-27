import React from "react";
import store from "../../store/store.js";
import "./Counter.css";

class CounterRedux extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>计数器</h1>
        <h2 id="counter">{store.getState()}</h2>
        <div>
          <button className="btn" onClick={() => store.dispatch({ type: "+" })}>
            增加
          </button>
          <button className="btn" onClick={() => store.dispatch({ type: "-" })}>
            减少
          </button>
        </div>
      </div>
    );
  }
}

export default CounterRedux;
