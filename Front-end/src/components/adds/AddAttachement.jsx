import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

const AddAttachment = ({ onCloseAddAttachment }) => {
  const [showModal, setShowModal] = useState(true);
  const [events, setEvents] = useState([]);
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
    
        const response = await fetch("http://172.20.10.6:8000/api/event/add_file/", {
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
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://172.20.10.6:8000/api/event/shared/");
        const data = await response.json();
        setEvents(data.events);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchEvents();
  }, []);

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
              className="absolute top-0 right-0 rounded-full p-2 text-[#04492C] hover:text-red-500"
            >
              X
            </button>
            <h2 className="text-lg text-[#01200E] font-bold mb-4">
              Share Files
            </h2>
            <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
                <label
                  htmlFor="schedule-for"
                  className="block text-[#011806] text-sm font-bold mb-2"
                >
                  Choose Event
                </label>
                <select
                  id="event"
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                  onChange={formik.handleChange}
                  value={formik.values.event}
                >
                  <option value="No Event ">Select Event</option>  {/* Option for no selection */}
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name}  
                    </option>
                  ))}
                </select>
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
                  Add File
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
