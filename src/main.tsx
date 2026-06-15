import React from "react";
import ReactDOM from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import App from "./App";
import { ErrorBoundary } from "./components";
import "./i18n";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
