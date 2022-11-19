import React from "react";
import ReactDOM from "react-dom";
import ButtonReact from "./index";

const mount = (el) => {
  console.log('react mount to vue', el);
  ReactDOM.render(<ButtonReact/>, el);
};

export { mount };

