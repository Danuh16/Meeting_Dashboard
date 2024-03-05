import React, { useState } from 'react';

const AddMeeting = ({onCloseAddMeeting}) => {
    let showModal = true;

//    const closeModalMeeting=()=>{
//     onCloseAddMeeting()
//    }
  

  return (
    <div>
{showModal && (
     
        <div className="left-[-2rem] w-screen h-[100rem] top-[-35rem] flex items-center justify-center absolute z-[999] bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-2xl  relative right-40 top-[-1rem] p-6 w-[600px]">
            <button onClick={onCloseAddMeeting} className="absolute top-0 right-0 rounded-rt-2xl  p-3 text-gray-600 hover:text-red-500 ">
              X
            </button>

            <h2 className="text-lg text-blue-800/100 font-mono font-bold mb-4">Add Meeting</h2>

            <form>
              <div className="mb-4">
                <label htmlFor="schedule-for" className="block text-gray-500 text-sm font-bold mb-2">
                  Schedule-For
                </label>
                <select id="schedule-for" className="border border-blue-800/100 text-gray-500 rounded w-full py-2 px-3">
                  <option value=""></option>
                  <option value="">Mobile App</option>
                  <option value="">Infography</option>
                  <option value="">Wireframes</option>
                  <option value="">Team Management</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-500 text-sm font-bold mb-2">
                  Date
                </label>
                <input id="date" type="date" className="border border-blue-800/100 rounded w-full py-2 px-3" />
              </div>

              <div className="mb-4">
                <label htmlFor="time" className="block text-gray-500 text-sm font-bold mb-2">
                  Select The Time
                </label>
                <select id="time" className="border border-blue-800/100 text-gray-500 rounded w-full py-2 px-3">
                   <option></option>
                  <option>10AM</option>
                  <option>11AM</option>
                  <option>12PM</option>
                  <option>1PM</option>
                  <option>2PM</option>
                  <option>3PM</option>
                  <option>4PM</option>
                  <option>5PM</option>
                  <option>6PM</option>
                  <option>7PM</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="duration" className="block text-gray-500 text-sm font-bold mb-2">
                  Duration
                </label>
                <input id="duration" type="text" className="border border-blue-800/100 rounded w-full py-2 px-3" />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
