import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./components/authentication/Login";
import MySideBar from "./components/MysideBar";
import MyProvider, { LoginStat } from "./context";

const App = () => {
  return (
    <MyProvider>
      <Router>
        <Navigator />
      </Router>
    </MyProvider>
  );
};
const Navigator = () => {
  const { userId } = LoginStat();
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [userId, navigate]);
  return (
    <Routes>
      {userId ? (
        <Route path={"/"} element={<MySideBar />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </Routes>
  );
};
export default App;
