import React from "react";
import ReactDOM from "react-dom";
import ButtonReact from "./index";

const mount = (el, { nameBtn }) => {
    console.log('react mount',el,nameBtn );
    ReactDOM.render(<ButtonReact nameBtn={nameBtn} />, el);
  return {
    mount
  };
};


export { mount };