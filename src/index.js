import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const Greeting = () => {
  return <App />;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
