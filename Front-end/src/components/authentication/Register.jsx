import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Logo.jpg';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const onSignUpClick = async () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

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

    if (confirmPassword === '') {
      setConfirmPasswordError('Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          navigate('/login');
        } else {
          const data = await response.json();
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="mainContainer flex flex-col items-center justify-center h-screen">
      <div className="shadow-xl shadow-[#2e533f] rounded-lg p-10 ">
      <div className="logoContainer shadow-xl shadow-[#2e533f] w-16 h-16 relative -top-16 left-32">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="titleContainer flex flex-col relative -top-10 items-center justify-center">
        <div className="text-4xl font-bold font-mono text-[#ECAB22]">Sign Up</div>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center relative -top-8 border-2 border-[#07552A] p-3 rounded-lg ">
        <input
          value={fullName}
          placeholder="Enter your Full Name"
          onChange={(ev) => setFullName(ev.target.value)}
          className="outline-none w-full sm:w-80"
        />
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center relative -top-6 border-2 border-[#07552A] p-3 rounded-lg ">
      <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="outline-none w-full sm:w-80"
        />
        <label className="errorLabel text-red-500 text-xs">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center relative -top-4 border-2 border-[#07552A] p-3 rounded-lg ">
        <input
          value={password}
          placeholder="Enter your password here"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className="outline-none w-full sm:w-80"
        />
        <label className="errorLabel text-red-500 text-xs">{passwordError}</label>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-start justify-center relative -top-2 border-2 border-[#07552A] p-3 rounded-lg ">
        <input
          value={confirmPassword}
          placeholder="Confirm your password here"
          type="password"
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          className="outline-none w-full sm:w-80"
        />
        <label className="errorLabel text-red-500 text-xs">
          {confirmPasswordError}
        </label>
      </div>
      <br />
      <div className="inputContainer flex flex-col items-center justify-center">
        <input
          className="inputButton bg-[#07522A] text-[#ECAB22] py-2 px-4 text-2xl shadow-2xl shadow-[#07552A] rounded-lg cursor-pointer w-28 h-11"
          type="button"
          onClick={onSignUpClick}
          value="Sign Up"
        />
      </div>
      <div className="loginContainer flex flex-col items-center justify-center mt-4">
        <span className="text-[#ECAB22] text-sm">Already have an account?</span>
        <a href="/login" className="text-[#fdc64e] text-sm hover:underline">
          Sign In
        </a>
      </div>
      </div>
    </div>
  );
};

export default SignUp;