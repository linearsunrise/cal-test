import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _ from "lodash";

const rootElement = document.getElementById("root");

if (_.isNil(rootElement)) {
  throw new Error("No root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
