import React from "react";
import ReactDOM from "react-dom";
import App2 from "app_2/App2";
import App3 from "app_3/App3";

import "./index.css";

// const RoutedTabs = React.lazy(() => import("app_02"));

const App = () => (
  <div className="container">
    <div>Name: app-1</div>
    <App2/>
    <App3/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
