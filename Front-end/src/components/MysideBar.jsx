import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { FiFile, FiLogOut } from "react-icons/fi";
import AddAttachment from "./adds/AddAttachement";
import AddAttandee from "./adds/AddAttandee";
import AddRoom from "./adds/AddRoom";
import CalenderHeader from "./calender/CalenderHeader";
import logo from "../Assets/Logo.jpg";

const MysideBar = () => {
  const [showAddAttachment, setShowAddAttachment] = useState(false);
  const [showAddAttandee, setShowAddAttandee] = useState(false);
  const [showAddRoom, setShowAddRoom] = useState(false);

  const handleAddAttachment = () => {
    setShowAddAttachment(true);
  };

  const handleCloseAddAttachment = () => {
    setShowAddAttachment(false);
  };

  const handleAddAttandee = () => {
    setShowAddAttandee(true);
  };

  const handleCloseAddAttandee = () => {
    setShowAddAttandee(false);
  };

  const handleAddRoom = () => {
    setShowAddRoom(true);
  };

  const handleCloseAddRoom = () => {
    setShowAddRoom(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#07522A] w-full md:w-1/5 min-h-screen">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="Logo" className="logo w-16 h-16" />
            <h1 className="text-[#FFFFFF] text-[150%] kode-mono mt-3">
              Global Meets
            </h1>
          </div>
          <div className="flex flex-col gap-8 mt-44">
            <button
              className="bg-[#FFFFFF2B] text-[#FFFFFF] relative right-9 flex gap-2  rounded-lg py-5 flex-shrink basis-full md:basis-auto  ml-16 justify-center items-center font-bold text-lg"
              onClick={handleAddAttachment}
            >
              <FiFile className="mt-1 text-xl" /> Attachments
            </button>
            {showAddAttachment && (
              <AddAttachment onCloseAddAttachment={handleCloseAddAttachment} />
            )}
            <button
              className="bg-[#FFFFFF2B] text-[#FFFFFF] relative right-9 flex gap-2  rounded-lg py-5 flex-shrink basis-full md:basis-auto  ml-16 justify-center items-center font-bold text-lg"
              onClick={handleAddAttandee}
            >
              <RiUserLine className="mt-1 text-xl" /> Add Attendee
            </button>
            {showAddAttandee && (
              <AddAttandee onCloseAddAttandee={handleCloseAddAttandee} />
            )}
            <button
              className="bg-[#FFFFFF2B] text-[#FFFFFF] relative right-9 flex gap-2  rounded-lg py-5 flex-shrink basis-full md:basis-auto  ml-16 justify-center items-center font-bold text-lg"
              onClick={handleAddRoom}
            >
              <FaHome className="mt-1 text-xl" /> Add Room
            </button>
            {showAddRoom && <AddRoom onCloseAddRoom={handleCloseAddRoom} />}
          </div>
          <div className="text-[#FFFFFF] flex items-center gap-3 mt-[18rem] ml-[15%] pt-[10%] font-mono">
            <FiLogOut style={{ width: "12%", height: "12%" }} />
            <a href="/SignUp">Sign Out</a>
          </div>
        </div>
        <div className="bg-gray-100 w-full md:w-4/5 overflow-hidden">
          <CalenderHeader />
        </div>
      </div>
    </div>
  );
};

export default MysideBar;
