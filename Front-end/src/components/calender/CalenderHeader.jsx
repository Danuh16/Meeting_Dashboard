import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import profile from "../../Assets/cutie.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import Calendar from "./Calender";
import Chart from "../chart/Chart";

const CalenderHeader = () => {
  const [meetingObjects, setMeetingObjects] = useState([]);

  const addObject = (newObject) => {
    setMeetingObjects([...meetingObjects, newObject]);
  };

  const removeObject = (id) => {
    const updatedObjects = meetingObjects.filter((obj) => obj.id !== id);
    setMeetingObjects(updatedObjects);
  };

  return (
    <div className="container mx-auto px-4 py-8"> {/* Center the content and add padding */}
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          {/* Profile */}
          <div className="flex flex-1 gap-3 md:flex-row sm:flex-col">
            <img src={profile} alt="" className="h-11 w-11 rounded-full" />
            <div>
              <h3 className="text-[#072E33] font-bold">Tochukwu M.</h3>
              <h4 className="text-[#0f9890] text-[0.8rem] font-mono">
                Joined 7 months ago
              </h4>
            </div>
          </div>
          {/* Search and other buttons */}
          <div className="flex gap-4">
            <form
              className="flex items-center gap-3 h-[37px] bg-white rounded-full px-3 md:w-[280px]"
            >
              <FiSearch className="text-[#072E33] text-[20px]" />
              <input
                type="text"
                className="outline-none w-full text-sm"
                placeholder="Search for job, task, or resume"
              />
            </form>
            <div className="flex flex-col md:flex-row">
              <input
                type="number"
                className="appearance-cover-full outline-none text-sm pl-5 pr-3 gap-3 h-[37px] bg-white rounded-full w-[150px] md:w-auto"
                placeholder="Choose"
              />
              <div className="pt-1 md:pt-0">
                <AiOutlineUserAdd className="text-[#072E33] text-[20px] gap-6" size={24} />
                <a href="http://"></a>
              </div>
              <div className="pt-1 md:pt-0">
                <BsGrid className="text-[#072E33] text-[20px]" size={24} />
                <a href="http://"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Calendar />
        </div>
        <hr className="bg-white/35 h-[0.2rem]" />
        <div className="flex gap-10">
          <div className="flex justify-between w-full"> {/* Full width for smaller screens */}
            <Chart meetingObjects={meetingObjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderHeader;