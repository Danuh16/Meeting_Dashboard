import { useFormik } from "formik";
import React, { useState } from "react";
import dayjs from 'dayjs';


const AddMeeting = ({ onCloseAddMeeting }) => {
  const [showModal, setShowModal] = useState(true);
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const access_token = userSession?.access_token;
  const formik = useFormik({
    initialValues: {room:1 , name:'', Pin:'', start_time:'', end_time:''},
    onSubmit: ()=>{
      formik.setFieldValue('start_time', dayjs(formik.values.start_time).format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
      formik.setFieldValue('end_time', dayjs(formik.values.end_time).format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
      addObject();
    },
  })

  const addObject = async () => {
    try {
      const response = await fetch("http://172.20.10.6:8000/api/event/add_event/",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
          body: JSON.stringify(formik.values),
        }
      );

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
    };

  const handleCloseModal = () => {
    setShowModal(false);
    onCloseAddMeeting();
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white rounded-2xl p-6 relative w-5/6 sm:w-[600px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 rounded-rt-2xl p-3 text-gray-600 hover:text-red-500"
            >
              X
            </button>

            <h2 className="text-lg text-[#ECAB22] font-mono font-bold mb-4">
              Schedule Meeting
            </h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Meeting Title
                </label>
                <input
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Pin"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  File Access Pin
                </label>
                <input
                  id="Pin"
                  value={formik.values.Pin}
                  onChange={formik.handleChange}
                  type="text"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="start"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Start Time
                </label>
                <input
                  id="start_time"
                  value={formik.values.start_time}
                  onChange={formik.handleChange}
                  type="datetime-local"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="end"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  End Time
                </label>
                <input
                  type="datetime-local"
                  id="end_time"
                  value={formik.values.end_time}
                  onChange={formik.handleChange}
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={(e)=>{
                    e.preventDefault()
                    console.log('here')
                    formik.handleSubmit();
                  }}
                  className="bg-[#07522A] hover:bg-[#71e1a5] text-[#ECAB22] font-bold py-2 px-4 rounded"
                >
                  + Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMeeting;
