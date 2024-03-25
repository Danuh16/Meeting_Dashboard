import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const AddRoom = ({ onCloseAddRoom }) => {
  const showModal = true;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      capacity: "",
      roomName: "",
    },
    onSubmit: async () => {
      try {
        const response = await fetch("http://192.168.0.103:8000/api/room/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            capacity: formik.values.capacity,
            roomName: formik.values.roomName,
          }),
        });

        if (response.ok) {
          navigate("/MysideBar");
        } else {
          const data = await response.json();
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/room/add_room/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        formik.setFieldValue("capacity", data.capacity);
        formik.setFieldValue("roomName", data.roomName);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-md mx-4 bg-white rounded-lg p-6">
            <button
              onClick={onCloseAddRoom}
              className="absolute top-0 right-0 rounded-full p-2 text-[#ECAB22] hover:text-red-500"
            >
              X
            </button>
            <h2 className="text-lg text-[#ECAB22] font-bold mb-4">Add Room</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="room"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Room Name
                </label>
                <input
                  id="room"
                  type="text"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                  value={formik.values.roomName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="capacity"
                  className="block text-[#ECAB22] text-sm font-bold mb-2"
                >
                  Capacity
                </label>
                <input
                  id="capacity"
                  type="number"
                  className="border border-[#07522A] rounded w-full py-2 px-3"
                  value={formik.values.capacity}
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

export default AddRoom;
