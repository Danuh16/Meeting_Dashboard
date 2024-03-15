import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Logo.jpg';
import { LoginStat } from '../../context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {userId,setUserId}= LoginStat();
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();
    console.log("logged");
    setUserId(true);
    // setEmailError('');
    // setPasswordError('');

    // if (email === '') {
    //   setEmailError('Please enter your email');
    //   return;
    // }

    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //   setEmailError('Please enter a valid email');
    //   return;
    // }

    // if (password === '') {
    //   setPasswordError('Please enter a password');
    //   return;
    // }

    // if (password.length < 8) {
    //   setPasswordError('The password must be 8 characters or longer');
    //   return;
    // }
    // checkAccountExists((accountExists) => {
    //   if (accountExists) {
    //     logIn();
    //   } else if (
    //     window.confirm(
    //       'An account does not exist with this email address: ' +
    //         email +
    //         '. Do you want to create a new account?'
    //     )
    //   ) {
    //     logIn();
    //   }
    // });
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
          setUserId(true);
          setEmail(email);
          navigate('/');
        } else {
          window.alert('Wrong email or password');
        }
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.token) {
      setUserId(false);
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
        setUserId(r.message === 'success');
        setEmail(user.email || '');
      });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen ">
      <div className="shadow-xl shadow-[#2e533f] rounded-lg p-10 ">
      <div className="logoContainer shadow-xl shadow-[#2e533f] w-16 h-16 relative -top-16 left-32">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="titleContainer flex flex-col relative -top-10 items-center justify-center">
        <div className="text-4xl font-bold font-mono text-[#ECAB22]">Login</div>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center relative -top-8 border-2 border-[#07552A] p-3 rounded-lg ">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox w-full sm:w-80"
        />
        <label className="errorLabel text-red-500 text-xs">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center relative -top-6 border-2 border-[#07552A] p-3 rounded-lg">
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
          className="inputButton bg-[#07522A] text-[#ECAB22] py-1 px-6 text-2xl shadow-2xl shadow-[#07552A] rounded-lg cursor-pointer w-28 h-11"
          type="button"
          onClick={(e)=>onButtonClick(e)}
          value="Sign In"
        />
      </div>
      <div className="signupContainer flex flex-col items-center justify-center mt-4">
        <span className="text-[#ECAB22] text-sm">Don't have an account?</span>
        <a href="/SignUp" className="text-[#fdc64e] text-sm hover:underline">Sign Up</a>
      </div>
      </div>
      </div>
  );
};

export default Login;