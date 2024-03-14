import React from 'react';

const AddAttandee = ({ onCloseAddAttandee }) => {
  const showModal = true;

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
              Add Attndee
            </h2>
            <form>
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
                >
                  <option value=""></option>
                  <option value="">Mobile App</option>
                  <option value="">Infography</option>
                  <option value="">Wireframes</option>
                  <option value="">Team Management</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#ECAB22] text-sm font-bold mb-2">
                  Email
                </label>
                <input id="email" type="email" className="border border-[#07522A] rounded w-full py-2 px-3" />
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