import React from "react";
import "./HelloWorld.css";

class HelloWorld extends React.Component {
  render() {
    console.log("Render .....");
    return (
      <div className="contanier">
        <h1 className="font-color">第一个React页面</h1>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

export default HelloWorld;
