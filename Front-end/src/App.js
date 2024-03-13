// import '@fontsource/kode-mono'
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import MySideBar from './components/MysideBar';

const App = ()=> {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // Example: Check credentials and set loggedIn state

    // Simulating a successful login
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={loggedIn ? <MySideBar /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
