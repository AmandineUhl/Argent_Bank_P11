// routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Home from "./Pages/Home";

const RouterConf = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouterConf;
