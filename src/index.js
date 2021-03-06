import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import HelloWorld from "./components/hello-world/HelloWorld";
// import Counter from "./components/counter/Counter";
import CounterRedux from "./components/counter/CounterRedux";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store.js";

let render = () =>
  ReactDOM.render(<CounterRedux />, document.getElementById("root"));

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
