import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAttachment = ({ onCloseAddAttachment }) => {
  const [showModal, setShowModal] = useState(true);
  const [event, setEvent] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setFile(file);
    } else {
      console.warn("No file selected yet.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.0.103:8000/api/event/add_room/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ event, file }),
        }
      );

      if (response.ok) {
        navigate("/MysideBar");
      } else {
        const data = await response.json();
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="schedule-for"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Events
                </label>
                <select
                  id="schedule-for"
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                >
                  <option value=""></option>
                  <option value="">Mobile App</option>
                  <option value="">Infography</option>
                  <option value="">Wireframes</option>
                  <option value="">Team Management</option>
                </select>
              </div>
              <div className="div">
                <label
                  htmlFor="File"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  File
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    handleFileChange(event);
                    setFile(e.target.value);
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
