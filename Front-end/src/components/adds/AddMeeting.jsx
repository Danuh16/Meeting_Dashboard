import { useFormik } from "formik";
import React, { useState } from "react";
import dayjs from 'dayjs';


const AddMeeting = ({ onCloseAddMeeting }) => {
  const [showModal, setShowModal] = useState(true);
  const formik = useFormik({
    initialValues: {host: '', room:'', name:'', Pin:'', start_time:'', end_time:''},
    onSubmit: ()=>{
      formik.setFieldValue('start_time', dayjs(formik.values.start_time).format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
      formik.setFieldValue('end_time', dayjs(formik.values.end_time).format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
      addObject();
    },
  })

  const addObject = async () => {
    try {
      const response = await fetch("https://gms.crosslightafrica.com/api/event/add_event/",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
              Add Meeting
            </h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="schedule-for"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Host
                </label>
                <input
                  id="host"
                  name="host"
                  value={formik.values.host}
                  onChange={formik.handleChange}
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                />
                  {/* <option value=""></option>
                  <option value="">Mobile App</option>
                  <option value="">Infography</option>
                  <option value="">Wireframes</option>
                  <option value="">Team Management</option>
                </select> */}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="room"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Room
                </label>
                <input
                  id="room"
                  value={formik.values.room}
                  onChange={formik.handleChange}
                  className="border border-[#07522A] text-[#ECAB22] rounded w-full py-2 px-3"
                />
                  {/* <option value=""></option>
                  <option value="16fdfefe-e466-4090-bc1a-57c43937f826">
                    Mobile App
                  </option>
                  <option value="96aaf72c-b5ed-4ce4-937d-1912e4f8bf0d">
                    Designs
                  </option>
                  <option value="06d3366b-9ec2-46e8-a741-df3ee1abeed7">
                    Infography
                  </option>
                  <option value="b51689be-8eb4-4481-b208-6bbcb7fb47c2">
                    Wireframes
                  </option>
                  <option value="b51689be-8eb4-4481-b208-6bbcb7fb47c3">
                    Team Management
                  </option>
                </select> */}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Meeting Name
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
                  Pin
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
                  + Add
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
