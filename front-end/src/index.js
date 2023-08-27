import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Redux/Store";
import RouteConf from "./RouterConf";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <RouteConf />
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
