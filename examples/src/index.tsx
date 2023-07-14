/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";

import App from "./App";
import "./styles/index.css";
import "element-ui-solid/dist/css/icon.css";
const root = document.getElementById("root");

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  root!
);
