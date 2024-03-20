import React from "react";

const AddRoom = ({ onCloseAddRoom }) => {
  const showModal = true;

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
            <h2 className="text-lg text-[#ECAB22] font-bold mb-4">
              Add Room
            </h2>
            <form>
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