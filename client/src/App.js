import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import configStore from "./redux/configStore";
import Layout from "./pages/Layout";
import { checkAuth } from "./actions/auth";

function App() {
  const store = configStore();
  store.dispatch(checkAuth());

  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
