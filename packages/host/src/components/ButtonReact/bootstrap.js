import React from "react";
import ReactDOM from "react-dom";
import ButtonReact from "./index";

const mount = (el,) => {
  console.log('react mount', el);

ReactDOM.render(<ButtonReact onSignIn={onSignIn} history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
const devRoot = document.getElementById("_auth-dev-root");
if (devRoot) {
  mount(devRoot, { defaultHistory: createBrowserHistory() });
}
}

export { mount };

