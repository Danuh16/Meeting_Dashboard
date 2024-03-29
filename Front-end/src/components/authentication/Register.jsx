import React,{useState, useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.jpg";

const SignUp = () => {
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string()
      .min(6, "The password must be 6 characters or longer")
      .required("Please enter a password"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "http://172.20.10.6:8000/api/v/auth/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          navigate("/");
          const data = await response.json();
          console.log(data.message)
        } else {
          const data = await response.json();
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="mainContainer flex flex-col items-center justify-center h-screen">
      <div className="shadow-xl shadow-[#2e533f] rounded-lg p-9 ">
        <div className="logoContainer shadow-xl shadow-[#2e533f] w-16 h-16 relative -top-16 left-32">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="titleContainer flex flex-col relative -top-10 items-center justify-center">
          <div className="text-4xl font-bold font-mono text-[#ECAB22]">
            Sign Up
          </div>
        </div>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className="inputContainer flex flex-col items-start justify-center relative -top-8 border-2 border-[#07552A] p-3 rounded-lg ">
            <input
              id="firstName"
              type="text"
              placeholder="Enter your First Name"
              {...formik.getFieldProps("first_name")}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <label className="errorLabel text-red-500 text-xs">
                {formik.errors.first_name}
              </label>
            )}
          </div>
          <br />
          <div className="inputContainer flex flex-col items-start justify-center relative -top-8 border-2 border-[#07552A] p-3 rounded-lg ">
            <input
              id="lastName"
              type="text"
              placeholder="Enter your Last Name"
              {...formik.getFieldProps("last_name")}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <label className="errorLabel text-red-500 text-xs">
                {formik.errors.last_name}
              </label>
            )}
          </div>
          <br />
          <div className="inputContainer flex flex-col items-start justify-center relative -top-6 border-2 border-[#07552A] p-3 rounded-lg ">
            <input
              id="email"
              type="email"
              placeholder="Enter your email here"
              {...formik.getFieldProps("email")}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.email && formik.errors.email && (
              <label className="errorLabel text-red-500 text-xs">
                {formik.errors.email}
              </label>
            )}
          </div>
          <br />
          <div className="inputContainer flex flex-col items-start justify-center relative -top-4 border-2 border-[#07552A] p-3 rounded-lg ">
            <input
              id="password"
              type="password"
              placeholder="Enter your password here"
              {...formik.getFieldProps("password")}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.password && formik.errors.password && (
              <label className="errorLabel text-red-500 text-xs">
                {formik.errors.password}
              </label>
            )}
          </div>
          <br />
          <div className="inputContainer flex flex-col items-start justify-center relative -top-2 border-2 border-[#07552A] p-3 rounded-lg ">
            <input
              id="password2"
              type="password"
              placeholder="Confirm your password"
              {...formik.getFieldProps("password2")}
              className="outline-none w-full sm:w-80"
            />
            {formik.touched.password2 &&
              formik.errors.password2 && (
                <label className="errorLabel text-red-500 text-xs">
                  {formik.errors.password2}
                </label>
              )}
          </div>
          <br />
          <button
            type="submit"
            className="buttonContainer bg-[#07522A] hover:bg-[#27583e] text-[#ECAB22] py-2 px-3 rounded-lg w-full sm:w-80"
          >
            Sign Up
          </button>
        </form>
        <div className="loginContainer flex flex-col items-center justify-center mt-4">
          <span className="text-[#ECAB22] text-sm">
            Already have an account?
          </span>
          <a href="/" className="text-[#07522A] text-sm hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
