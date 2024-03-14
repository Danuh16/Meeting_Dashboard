import React from "react";
import { FaHome, FaBriefcase } from "react-icons/fa";
import {
  FiFile,
  FiCheckSquare,
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiFolder,
  FiLogOut,
} from "react-icons/fi";
import CalenderHeader from "./calender/CalenderHeader";

const MysideBar = () => {
  return (
    <div className="container items-center">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#07522A] w-full md:w-1/5 min-h-screen">
          <div className="flex items-center justify-center gap-4">
            <svg
              fill="#ECAB22"
              version="1.1"
              id="_x31_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="64px"
              height="64px"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <ellipse
                    transform="matrix(0.9659 -0.2588 0.2588 0.9659 -11.3148 8.9075)"
                    cx="28.2"
                    cy="47.4"
                    rx="7.8"
                    ry="7.8"
                  ></ellipse>{" "}
                  <path d="M37.4,97.5h-9.5c0,0-0.5,0-0.9,0c-4.3-0.4-8-3.5-9.1-7.8l-6.5-24.2c-0.4-1.4-1.8-2.1-3-1.8c-1.4,0.4-2.1,1.8-1.8,3 l6.4,24.2c1.7,6.3,7,10.9,13.5,11.4c0.6,0.1,1.3,0.1,1.3,0.1h9.5c1.4,0,2.4-1.1,2.5-2.5C39.8,98.5,38.8,97.5,37.4,97.5z"></path>{" "}
                  <path d="M48.6,83.9h-13c-0.3-4.9-1.1-9.8-2.3-14.7c-0.1-0.4-0.4-1.4-0.4-1.5c-1.7-6.3-7.7-10.3-14-9.7c0,0-0.8,0.1-1,0.1 c-2.3,0.6-3.7,3-3.1,5.4l6.7,24.9c0.7,2.8,3.1,4.9,6.1,5.1h0.6h15.5v17.8c0,2.7,2.1,4.9,4.9,4.9c2.7,0,4.9-2.1,4.9-4.9V88.8 c0-1.3-0.5-2.5-1.5-3.4C51.1,84.4,49.8,83.9,48.6,83.9z"></path>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <ellipse
                    transform="matrix(0.2588 -0.9659 0.9659 0.2588 29.3697 133.1303)"
                    cx="101.4"
                    cy="47.4"
                    rx="7.8"
                    ry="7.8"
                  ></ellipse>{" "}
                  <path d="M90.2,97.5h9.5c0,0,0.5,0,0.9,0c4.3-0.4,8-3.5,9.1-7.8l6.5-24.2c0.4-1.4,1.8-2.1,3-1.8c1.4,0.4,2.1,1.8,1.8,3l-6.4,24.2 c-1.7,6.3-7,10.9-13.5,11.4c-0.6,0.1-1.3,0.1-1.3,0.1h-9.5c-1.4,0-2.4-1.1-2.5-2.5C87.8,98.5,88.9,97.5,90.2,97.5z"></path>{" "}
                  <path d="M79,83.9h13c0.3-4.9,1.1-9.8,2.3-14.7c0.1-0.4,0.4-1.4,0.4-1.5c1.7-6.3,7.7-10.3,14-9.7c0,0,0.8,0.1,1,0.1 c2.3,0.6,3.7,3,3.1,5.4L106,88.4c-0.7,2.8-3.1,4.9-6.1,5.1h-0.6H83.9v17.8c0,2.7-2.1,4.9-4.9,4.9s-4.9-2.1-4.9-4.9V88.8 c0-1.3,0.5-2.5,1.5-3.4C76.5,84.4,77.8,83.9,79,83.9z"></path>{" "}
                </g>{" "}
                <rect x="38.8" y="70.8" width="50.6" height="6"></rect>{" "}
              </g>
            </svg>{" "}
            <h1 className="text-[#ECAB22] text-[150%] kode-mono mt-3">Global Meets</h1>
          </div>
          <div className="container flex flex-col gap-5 font-mono">
            <div className="text-[#ECAB22] text-[0.95rem] flex flex-col gap-4 ml-[15%] pt-[20%]">
              <h2 className="text-[#ECAB22]">Main</h2>
              <div className="flex items-center gap-3 ">
                <FaHome /> <a href="http://">Home</a>
              </div>
              <div className="flex items-center gap-3">
                <FaBriefcase /> <a href="http://">Jobs</a>
              </div>
              <div className="flex items-center gap-3 ">
                <FiFile /> <a href="http://">Resumes</a>
              </div>
              <div className="flex items-center gap-3 ">
                <FiCheckSquare /> <a href="http://">Tasks</a>
              </div>
              <div className="flex items-center gap-3 ">
                <FiCalendar /> <a href="http://">Calender</a>
              </div>
            </div>
            <div className="text-[#ECAB22] flex text-[0.95rem] flex-col gap-4 ml-[15%] pt-[15%]">
              <h2 className="text-[#ECAB22]">Admin</h2>
              <div className="flex items-center gap-3 ">
                <FiUsers /> <a href="http://">Users</a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin /> <a href="http://">Locations</a>
              </div>
              <div className="flex items-center gap-3 ">
                <FiFolder /> <a href="http://">Job Boards</a>
              </div>
            </div>
            <div className="text-[#ECAB22] text-[0.95rem] flex flex-col gap-4 ml-[15%] pt-[15%] font-mono">
              <h2 className="text-[#ECAB22]">Categories</h2>
              <div className="flex items-center gap-3 ">
                <input
                  type="radio"
                  className="h-4 w-4 border-[#ECAB22] text-[#ECAB22] focus:ring-[#ECAB22]"
                />{" "}
                <a href="http://">Business</a>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="h-4 w-4 border-[#ECAB22] focus:ring-[#ECAB22]"
                />{" "}
                <a href="http://">Working</a>
              </div>
              <div className="flex items-center gap-3 ">
                <input
                  type="radio"
                  className="h-4 w-4 border-[#ECAB22] focus:ring-[#ECAB22]"
                />{" "}
                <a href="http://">Management</a>
              </div>
            </div>
            <div className="text-[#ECAB22] flex items-center gap-3 mt-[10rem] ml-[15%] pt-[10%] font-mono">
              <FiLogOut style={{ width: "12%", height: "12%" }} />{" "}
              <a href="/Login">Sign Out</a>
            </div>
          </div>
        </div>
        <div className="bg-[#ecfbf3] w-full md:w-4/5 overflow-hidden">
          <CalenderHeader />
        </div>
      </div>
    </div>
  );
};

export default MysideBar;
