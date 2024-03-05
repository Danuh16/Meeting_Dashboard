import React from "react";

const Schedule = () => {
  return (
    <div className="container flex ">
      <div className="flex flex-col gap-3 font-mono">
        <h2 className="bg-white pr-10 py-4 text-gray-500 text-lg rounded-xl">
          <span className="py-4 p-[0.09rem] rounded-l-lg bg-green-400 mr-2"></span>
          Mobile Apps
        </h2>
        <h2 className="bg-white pr-10 py-4 text-gray-500 text-lg rounded-xl">
          <span className="py-4 p-[0.09rem]  rounded-l-xl bg-red-500 mr-2"></span>
          Designs
        </h2>
        <h2 className="bg-white pr-10 py-4 text-gray-500 text-lg rounded-xl">
          <span className="py-4 p-[0.09rem]  rounded-l-xl bg-blue-500/100 mr-2"></span>
          Infography
        </h2>
        <h2 className="bg-white pr-10 py-4 text-gray-500 text-lg rounded-xl">
          <span className="py-4 p-[0.09rem]  rounded-l-xl bg-yellow-600/50 mr-2"></span>
          Wireframes
        </h2>
        <h2 className="bg-white  pr-10 py-4 text-[#c743fa]  text-lg rounded-xl font-semibold">
          <span className="py-5 p-1  rounded-l-xl bg-[#c743fa] mr-2"></span>Team
          Management
        </h2>
        <h2 className="bg-white p-4 px-10 text-gray-500 text-lg rounded-xl">
          Add Meeting
        </h2>
      </div>
    </div>
  );
};

export default Schedule;
