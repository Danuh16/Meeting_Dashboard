import React, { useState } from "react";
import logo from "../../Assets/Logo.jpg";
import { LoginStat } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const { setUserId } = LoginStat();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string()
      .min(8, "The password must be 8 characters or longer")
      .required("Please enter a password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "https://gms.crosslightafrica.com/api/v/auth/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();

        if (response.ok) {
          console.log(data.is_superuser);
          
          const userSession = {
            email: values.email,
            token: data.access_token,
            full_name: data.full_name,
          };
        
          localStorage.setItem("userSession", JSON.stringify(userSession));
          setUserId(true);
        
          if (data.is_superuser) {
            navigate('/Dashboard ');
          } else {
            navigate('/MysideBar');
          }
        } else {
          window.alert(data.detail);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="container flex flex-col items-center justify-center h-screen bg-green-[#01160B]">
      <div className="shadow-xl shadow-[#2e533f] rounded-lg p-10 bg-green-[#01160B]">
        <div className="logoContainer shadow-xl shadow-[#071F10] w-16 h-16 relative -top-16 left-32">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="titleContainer flex flex-col relative -top-10 items-center justify-center">
          <div className="text-4xl font-bold font-mono text-[#022C13]">
            Login
          </div>
        </div>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className="inputContainer flex flex-col items-start justify-center relative -top-8 border-2 border-[#07552A] p-3 rounded-lg">
            <input
              type="text"
              name="email"
              value={formik.values.email}
              placeholder="Enter your email here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.email && formik.errors.email && (
              <label className="errorLabel text-red-500 text-xs">
                {formik.errors.email}
              </label>
            )}
          </div>
          <br />
          <div className="inputContainer flex flex-col items-start justify-center relative -top-6 border-2 border-[#07552A] p-3 rounded-lg">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              placeholder="Enter your password here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.password && formik.errors.password && (
              <label className="errorLabel text-red-500 text-xs">
                {formik.errors.password}
              </label>
            )}
          </div>
          <br />
          <div className="inputContainer flex flex-col items-center justify-center">
            <button
              type="submit"
              className="inputButton bg-[#07522A] text-[#ECAB22] py-1 px-6 text-xl shadow-2xl shadow-[#07552A] rounded-lg cursor-pointer w-28 h-11"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="signupContainer flex flex-col items-center justify-center mt-4">
          <span className="text-[#ECAB22] text-sm">Don't have an account?</span>
          <Link
            to="/register"
            className="text-[#07522A] text-sm hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
