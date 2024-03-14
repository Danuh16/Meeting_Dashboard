import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Logo.jpg';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError('');
    setPasswordError('');

    if (email === '') {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if (password === '') {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    checkAccountExists((accountExists) => {
      if (accountExists) {
        logIn();
      } else if (
        window.confirm(
          'An account does not exist with this email address: ' +
            email +
            '. Do you want to create a new account?'
        )
      ) {
        logIn();
      }
    });
  };

  const checkAccountExists = (callback) => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((r) => {
        callback(r?.userExists);
      });
  };

  const logIn = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.message === 'success') {
          localStorage.setItem(
            'user',
            JSON.stringify({ email, token: r.token })
          );
          props.setLoggedIn(true);
          props.setEmail(email);
          navigate('/');
        } else {
          window.alert('Wrong email or password');
        }
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.token) {
      props.setLoggedIn(false);
      return;
    }

    fetch('', {
      method: 'POST',
      headers: {
        'jwt-token': user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        props.setLoggedIn(r.message === 'success');
        setEmail(user.email || '');
      });
  }, []);

  return (
    <div className="mainContainer flex flex-col items-center justify-center h-screen">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="titleContainer flex flex-col items-center justify-center">
        <div className="text-4xl font-bold font-mono text-[#ECAB22]">Login</div>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox w-full sm:w-80"
        />
        <label className="errorLabel text-red-500 text-xs">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center">
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox w-full sm:w-80"
        />
        <label className="errorLabel text-red-500 text-xs">{passwordError}</label>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-center justify-center">
        <input
          className="inputButton bg-[#07522A] text-[#ECAB22] py-3 px-6 text-2xl rounded-lg cursor-pointer"
          type="button"
          onClick={onButtonClick}
          value="Sign In"
        />
      </div>
      <div className="signupContainer flex flex-col items-center justify-center mt-4">
        <span className="text-[#ECAB22] text-sm">Don't have an account?</span>
        <a href="/SignUp" className="text-[#fdc64e] text-sm hover:underline">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;