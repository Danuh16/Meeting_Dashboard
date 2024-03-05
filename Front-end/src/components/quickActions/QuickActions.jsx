import React from "react";
import { RiUserLine, RiKeyLine } from "react-icons/ri";
import { FiFile } from "react-icons/fi";
import { MdKeyboardVoice } from "react-icons/md";

const QuickActions = () => {
  return (
    <div className="Container flex flex-col justify-between">
      <div className="flex gap-3 md:flex-row sm:flex-col ">
        <p>
          <h3 className="text-[1.5rem] text-blue-800/100 font-bold font-mono mb-3">
            Quick Actions
          </h3>
        </p>
      </div>
      <div className="flex flex-row gap-4  h-16">
        <h2 className="bg-white w-[18.5rem] pt-4 pl-2 text-gray-500 flex gap-3 text-lg rounded-xl">
          <MdKeyboardVoice className="mt-1 text-2xl" /> Voicemails
          <span className="pl-28">0</span>
        </h2>
        <h2 className="bg-white w-[18.5rem] pt-4 pl-2 text-gray-500 flex gap-3 text-lg rounded-xl">
          <FiFile className="mt-1 text-2xl" /> Attachments
          <span className="pl-28">32</span>
        </h2>
        <h2 className="bg-white w-[18.5rem] pt-4 pl-2 text-gray-500 flex gap-3 text-lg rounded-xl">
          <RiUserLine className="mt-1 text-2xl" /> Team members
          <span className="pl-24">8</span>
        </h2>
        <h2 className="bg-white w-[18.5rem] pt-4 pl-2 text-gray-500 flex gap-3 text-lg rounded-xl">
          <RiKeyLine className="mt-1 text-2xl" /> Access Creds
          <span className="pl-28">2</span>
        </h2>
      </div>
    </div>
  );
};

export default QuickActions;
