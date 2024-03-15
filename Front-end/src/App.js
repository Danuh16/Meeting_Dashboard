import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./components/authentication/Login";
import MySideBar from "./components/MysideBar";
import MyProvider, { LoginStat } from "./context";
import SignUp from "./components/authentication/Register"

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
    } 
  }, [userId, navigate]);
  return (
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/*"
        element={userId ? <MySideBar /> : <Navigate to="/login" />}
      />
    </Routes>
 
  );
};
export default App;
