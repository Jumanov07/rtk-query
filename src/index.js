import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { dataSlice } from "./fetures/dataSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={dataSlice}>
    <App />
  </ApiProvider>
);
