import React,{useState} from "react";
import { FiSearch } from "react-icons/fi";
import profile from "../../Assets/cutie.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { RiBookmarkLine, RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import Calendar from "./Calender";
import Chart from "../chart/Chart";
import Schedule from "../schedules/Schedule";

const CalenderHeader = () => {

  const [meetingObjects ,setMeetingObjects ] = useState([
  
  ])

  const addObject = (newObject) => {
    // const newObject =  {
    //   id:4,
    //   meetingName : 'meeting1',
    //   startTime:'',
    //   endTime : '',
    //   meetingDate : '',
    //   host :{color:'red',name:'web'}

    // };
    setMeetingObjects([...meetingObjects, newObject]);
    console.log(meetingObjects)
  };

  const removeObject = (id) => {
    const updatedObjects = meetingObjects.filter((obj) => obj.id !== id);
    setMeetingObjects(updatedObjects);
  };

  // const updateObject = (id, newName) => {
  //   const updatedObjects = meetingObjects.map((obj) => {
  //     if (obj.id === id) {
  //       return { ...obj, name: newName };
  //     }
  //     return obj;
  //   });
  //   setObjects(updatedObjects);
  // };





  return (
    <div className="container p-8">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          {/* profile */}
          <div className="flex flex-1 gap-3 md:flex-row sm:flex-col ">
            <img src={profile} alt="" className="h-11 w-11 rounded-full" />
            <div>
              <h3 className="text-[#072E33] font-bold">Tochukwu M.</h3>
              <h4 className="text-[#0f9890] text-[0.8rem] font-mono">
                Joined 7 months ago
              </h4>
            </div>
          </div>
          <div className="flex gap-4">
            <form className="flex items-center gap-3 h-[37px] bg-white rounded-full px-[3%] md:w-[280px]">
              <FiSearch className="text-[#072E33] text-[20px]" />
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
            <div className="pt-1">
              <AiOutlineUserAdd className="text-[#072E33] text-[20px] gap-6" size={24} />
              <a href="http://"></a>
            </div>
            <div className="pt-1">
              <BsGrid className="text-[#072E33] text-[20px]" size={24} />
              <a href="http://"></a>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Calendar />
        </div>
        <hr className="bg-white/35 h-[0.2rem]" />
        <div className="flex  gap-10">
          <div>
            <Schedule
            addMeetingObject={addObject}
            />
          </div>
          <div className="flex justify-between w-[60rem]">
            <Chart
            meetingObjects={meetingObjects}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderHeader;
