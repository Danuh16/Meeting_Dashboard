import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { FiFile } from "react-icons/fi";
import AddAttachment from "../schedules/AddAttachement";
import AddAttandee from "../schedules/AddAttandee";
import AddRoom from "../schedules/AddRoom";

const QuickActions = () => {
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
      <div className="flex flex-col justify-between">
        <div className="flex flex-col md:flex-row sm:flex-col">
          <h3 className="text-2xl text-[#07522a] font-bold font-mono mb-3">
            Quick Actions
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            className="bg-[#07522a] text-[#ECAB22] flex gap-4 text-lg rounded-xl py-4 px-2 shadow-md  shadow-[#2e533f] justify-center"
            onClick={handleAddAttachment}
          >
            <FiFile className="mt-1 text-2xl" /> Attachments
          </button>
          {showAddAttachment && (
            <AddAttachment onCloseAddAttachment={handleCloseAddAttachment} />
          )}
          <button
            className="bg-[#07522a] text-[#ECAB22] flex gap-3 text-lg rounded-xl py-4 px-2 shadow-md shadow-[#2e533f] justify-center"
            onClick={handleAddAttandee}
          >
            <RiUserLine className="mt-1 text-2xl" />Add Attandee
          </button>
          {showAddAttandee && (
            <AddAttandee onCloseAddAttandee={handleCloseAddAttandee} />
          )}
          <button
            className="bg-[#07522a] text-[#ECAB22] flex gap-3 text-lg rounded-xl py-4 px-2 shadow-md shadow-[#2e533f] justify-center"
            onClick={handleAddRoom}
          >
            <FaHome className="mt-1 text-2xl" /> Add Room
          </button>
          {showAddRoom && <AddRoom onCloseAddRoom={handleCloseAddRoom} />}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;