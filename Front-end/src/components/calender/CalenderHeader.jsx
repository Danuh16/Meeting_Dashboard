import React from "react";
import { FiSearch } from "react-icons/fi";
import profile from "../../Assets/cutie.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { RiBookmarkLine, RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import Calendar from "./Calender";
import GanttChart from "../chart/GanttChart";
import Schedule from "../schedules/Schedule";






const CalenderHeader = () => {
  return (
    <div className="container p-8 ">
        <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        {/* profilr */}
        <div className="flex flex-1 gap-3 md:flex-row sm:flex-col ">
          <img src={profile} alt="" className="h-11 w-11 rounded-full" />
          <p>
            <h3 className=" text-blue-800/100 font-bold">Tochukwu M.</h3>
            <h4 className="text-gray-400 text-[0.8rem] font-mono">
              Joined 7 months ago
            </h4>
          </p>
        </div>
        <div className="flex gap-4">
          <form className=" flex items-center gap-3 h-[37px] bg-white rounded-full px-[3%] w-[280px] ">
            <FiSearch className="text-gray-400 text-[20px]" />
            <input
              type="text"
              className="outline-none w-full text-sm"
              placeholder="Search for job, task, or resume"
            />
          </form>
          <div>
            <input
              type="number"
              className="appearance-cover-full outline-none text-sm pl-5 pr-3 gap-3 h-[37px] bg-white rounded-full w-[150px]"
              placeholder="Choose"
            />
          </div>
          <div className="pt-1 ">
            <AiOutlineUserAdd
              className="text-gray-500 text-[20px] gap-6"
              size={24}
            />
            <a href="http://"></a>
          </div>
          <div className="pt-1 ">
            <BsGrid className="text-gray-500 text-[20px]" size={24} />
            <a href="http://"></a>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-1 gap-3 md:flex-row sm:flex-col ">
          <p>
            <h3 className="text-[1.5rem] text-blue-800/100 font-bold font-mono">
              Calendar Meetings
            </h3>
            <div className="flex items-center">
              <h4 className="text-blue-800/100 text-[0.85rem] font-mono">
                San Francisco, CA
              </h4>
              <FiMapPin className="text-blue-800/90 text-[20 px]  ml-2 mr-2" />
              <span className="ml-1 text-blue-500/100 font-mono text-[1.1rem]">
              <span className="absolute top-[9.18rem] left-[26rem]">.</span>364, Tochukwu's Office
              </span>
            </div>
          </p>
        </div>
        <div className="flex gap-4 pr-6">
        <div className="relative  ">
        <span className="absolute top-[1.1rem] justify-center transform -translate-y-1/2 left-2 text-green-700 font-bold leading-none" style={{ fontSize: '1.5rem' }}>•</span>
  <input
    className="outline-none text-center text-sm pl-5 pr-3 gap-3 h-[37px] bg-white rounded-full w-[80px]"
    placeholder="Open"
  />
</div>
          <div className="pt-1 bg-white flex justify-center rounded-full h-8 w-8">
            <RiBookmarkLine
              className="text-gray-500  gap-6"
              size={20}
            />
            <a href="http://"></a>
          </div>
          <div className="pt-1 bg-white flex justify-center rounded-full h-8 w-8 ">
            <RiEdit2Line
              className="text-gray-500 text-[20px] gap-6"
              size={20}
            />
            <a href="http://"></a>
          </div>
          <div className="pt-1 bg-white flex justify-center rounded-full h-8 w-8 ">
            <RiDeleteBinLine className="text-gray-500 text-[20px] text-center" size={20} />
            <a href="http://"></a>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
      <Calendar/>
      </div>
      <hr className="bg-white/35 h-[0.2rem]" />
      <div>
        <Schedule/>
      </div>
      {/* <div className="flex justify-between">
        <GanttChart/>
      </div> */}
      </div>
    </div>
  );
};

export default CalenderHeader;
