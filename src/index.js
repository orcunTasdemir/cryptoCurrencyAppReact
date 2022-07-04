import react from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "antd/dist/antd.css";
import store from "./app/store";
import ScrollToTop from "./scrollToTop";

reactDOM.render(
  <Router>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
