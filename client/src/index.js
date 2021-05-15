import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import MyProvider from "./context"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <MyProvider>
    <Routes />
  </MyProvider>,
  document.getElementById("root")
);

reportWebVitals();
