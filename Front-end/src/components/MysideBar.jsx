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
import logo from "../Assets/Logo.jpg";

const MysideBar = () => {
  return (
    <div className="container items-center">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#07522A] w-full md:w-1/5 min-h-screen">
          <div className="flex items-center justify-center gap-2 ">
          <img src={logo} alt="Logo" className="logo w-16 h-16" />
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
              <a href="/SignUp">Sign Out</a>
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
