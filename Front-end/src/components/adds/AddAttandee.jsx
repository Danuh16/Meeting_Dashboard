import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

const AddAttandee = ({ onCloseAddAttandee }) => {
 const [showModal, setShowModal] = useState(true);  
  const formik = useFormik({
    initialValues: {
      event: "",
      email: "",
    },
    onSubmit: async () => {
      try {
        const response = await fetch("http://192.168.0.104:8000/api/event/add_attendee/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: formik.values.event,
            email: formik.values.email,
          }),
        });
    
        if (response.ok) {
          alert("Submission successful!");
          handleCloseModal();
        } else {
          const data = await response.json();
          alert("Submission failed: " + data.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // useEffect(() => {
  //   fetch("http://192.168.0.104:8000/api/event/event/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       formik.setFieldValue("event", data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    onCloseAddAttandee();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md mx-4 bg-white rounded-lg p-6">
            <button
              onClick={onCloseAddAttandee}
              className="absolute top-0 right-0 rounded-full p-2 text-[#ECAB22] hover:text-red-500"
            >
              X
            </button>
            <h2 className="text-lg text-[#ECAB22] font-bold mb-4">
              Add Attandee
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="schedule-for"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Events
                </label>
                <input
                  id="event"
                  type="text"
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="event"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                  placeholder="example@abc.com"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#07522A] hover:bg-[#71e1a5] text-[#ECAB22] font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAttandee;
