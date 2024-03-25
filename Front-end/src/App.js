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
import SignUp from "./components/authentication/Register"
import Pin from "./components/addPin/Pin";
import Dashboard from './components/adminPanel/Dashboard';
import FilePreview from './components/addPin/file';

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
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/FilePreview" element={<FilePreview/>}/>
      <Route path="/pin" element={<Pin />} />
      <Route
        path="/*"
        element={userId ? <MySideBar /> : <Navigate to="/login" />}
      />
    </Routes>
 
  );
};
export default App;
