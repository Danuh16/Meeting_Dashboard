import React, { useState } from "react";
import { useFormik } from "formik";

const AddAttachment = ({ onCloseAddAttachment }) => {
  const [showModal, setShowModal] = useState(true);
  const formik = useFormik({
    initialValues: {
      event: "",
      file: "",
    },
    onSubmit: async () => {
      try {
        const formData = new FormData();
        formData.append("event", formik.values.event);
        formData.append("file", formik.values.file);
    
        const response = await fetch("https://gms.crosslightafrica.com/api/event/add_file/", {
          method: "POST",
          body: formData,
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

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      formik.setFieldValue("file", file);
    } else {
      console.warn("No file selected yet.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onCloseAddAttachment();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md mx-4 bg-white rounded-lg p-6">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 rounded-full p-2 text-[#ECAB22] hover:text-red-500"
            >
              X
            </button>
            <h2 className="text-lg text-[#ECAB22] font-bold mb-4">
              Add Attachment
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
              <div className="div">
                <label
                  htmlFor="file"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  File
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFileChange(e);
                  }}
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

export default AddAttachment;
