import React from "react";
import logo from "../../Assets/Logo.jpg";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import FilePreview from './file';

const Pin = () => {
   const navigate = useNavigate()
   const data = {
    fileUrl: '' 
  };

  const formik = useFormik({
    initialValues: {
      pin: "",
    },
    onSubmit: async () => {
      try {
        const response = await fetch(
          "https://gms.crosslightafrica.com/api/event/events/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              pin: formik.values.pin,
            }),
          }
        );
        
        if (response.ok) {
          alert("Submission successful!");
          navigate("/FilePreview")
        } else {
          const data = await response.json();
          alert("Submission failed: " + data.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  //  useEffect(() => {
  //   fetch("http://192.168.0.104:8000/api/event/events/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       formik.setFieldValue("pin", data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen bg-green-[#01160B]">
      <form onSubmit={formik.handleSubmit}>
        <div className="shadow-xl shadow-[#2e533f] rounded-lg p-10 bg-green-[#01160B]">
          <div className="logoContainer shadow-xl shadow-[#071F10] w-16 h-16 relative -top-16 left-32">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="titleContainer flex flex-col relative -top-10 items-center justify-center">
            <div className="text-4xl font-bold font-mono text-[#022C13]">
              PIN
            </div>
          </div>
          <br />
          <div className="inputContainer flex flex-col items-start justify-center relative -top-6 border-2 border-[#07552A] p-3 rounded-lg">
            <input
              id="pin"
              type="text"
              placeholder="Enter a pin"
              className="outline-none w-full sm:w-80"
              value={formik.values.event}
              onChange={formik.handleChange}
            />
          </div>
          <br />
          <div className="inputContainer flex flex-col items-center justify-center">
            <button
              className="inputButton bg-[#07522A] text-[#ECAB22] py-1 px-6 text-2xl shadow-2xl shadow-[#07552A] rounded-lg cursor-pointer w-28 h-11"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div>
      <FilePreview pinData={data} />
      </div>
    </div>
  );
};

export default Pin;
