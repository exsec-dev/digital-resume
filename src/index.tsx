import React from "react";
import ReactDOM from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import App from "./App";
import "./i18n";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
