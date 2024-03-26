import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/authentication/Login";
import MySideBar from "./components/MysideBar";
import MyProvider, { LoginStat } from "./context";
import SignUp from "./components/authentication/Register";
import Pin from "./components/addPin/Pin";
import Dashboard from "./components/adminPanel/Dashboard";
import FilePreview from "./components/addPin/file";

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
    if (!userId && !localStorage.getItem("userSession")) {
      navigate("/");
    }
  }, [userId, navigate]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Admin" element={<MySideBar />} />
      <Route path="/FilePreview" element={<FilePreview />} />
      <Route path="/pin" element={<Pin />} />
    </Routes>
  );
};
export default App;
