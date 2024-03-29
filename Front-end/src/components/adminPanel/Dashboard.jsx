import React, { useEffect, useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { FiFile, FiLogOut, FiSearch } from "react-icons/fi";
import AddAttachment from "../adds/AddAttachement";
import AddAttandee from "../adds/AddAttandee";
import AddMeeting from "../adds/AddMeeting";
import logo from "../../Assets/Logo.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import Calendar from "../calender/Calender";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showAddMeeting, setShowAddMeeting] = useState(false);
  const [showAddAttachment, setShowAddAttachment] = useState(false);
  const [showAddAttandee, setShowAddAttandee] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null);
  const token = userSession?.access_token;
  console.log(token);
  const full_name = userSession?.full_name;

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("userSession"));
    setUserSession(session);
    if (!session) {
      navigate("/");
    }
  }, [navigate]);

  const HandleAddMeeting = () => {
    setShowAddMeeting(true);
  };

  const handleCloseAddMeeting = () => {
    setShowAddMeeting(false);
  };

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

  const headers = [
    "Title",
    "Planed For",
    "Closed At",
    "Participants",
    "Shared File",
  ];
  const [events, setEvents] = useState([]);

  const handleLogout = async () => {
    try {
      const token = userSession.access_token;
      console.log(token);
      const response = await fetch(
        "http://172.20.10.6:8000/api/v/auth/logout/",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${token}`,
          },
          // body: JSON.stringify({ /* data */ }),
        }
      );

      if (response.ok || localStorage.getItem("userSession")) {
        console.log("Logout successful");
        localStorage.removeItem("userSession");
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://172.20.10.6:8000/api/event/admin/"
        );
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchEvents();
  }, []);

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
          <div className="flex flex-col gap-8 mt-10 md:mt-44">
            <button
              className="bg-[#FFFFFF2B] text-[#FFFFFF] relative right-9 flex gap-2 rounded-lg py-5 flex-shrink basis-full md:basis-auto ml-16 justify-center items-center font-bold text-lg"
              onClick={HandleAddMeeting}
            >
              <span>+</span> Schedule Meeting
            </button>
            {showAddMeeting && (
              <div className="flex items-center justify-center">
                <AddMeeting onCloseAddMeeting={handleCloseAddMeeting} />
              </div>
            )}
            <button
              className="bg-[#FFFFFF2B] text-[#FFFFFF] relative right-9 flex gap-2 rounded-lg py-5 flex-shrink basis-full md:basis-auto ml-16 justify-center items-center font-bold text-lg"
              onClick={handleAddAttachment}
            >
              <FiFile className="mt-1 text-xl" /> Attachments
            </button>
            {showAddAttachment && (
              <AddAttachment onCloseAddAttachment={handleCloseAddAttachment} />
            )}
            <button
              className="bg-[#FFFFFF2B] text-[#FFFFFF] relative right-9 flex gap-2 rounded-lg py-5 flex-shrink basis-full md:basis-auto ml-16 justify-center items-center font-bold text-lg"
              onClick={handleAddAttandee}
            >
              <RiUserLine className="mt-1 text-xl" /> Add Participants
            </button>
            {showAddAttandee && (
              <AddAttandee onCloseAddAttandee={handleCloseAddAttandee} />
            )}
          </div>
          <div className="text-[#FFFFFF] flex items-center gap-3  md:mt-[7rem] ml-[20%] md:ml-[3rem]  font-mono">
            <FiLogOut style={{ width: "12%", height: "12%" }} />
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        </div>
        <div className="bg-gray-100 w-full md:w-4/5 overflow-hidden">
          <div className="container p-8">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between flex-wrap">
                <div className="flex flex-1 gap-3 md:flex-row sm:flex-col ">
                  <img
                    src={logo}
                    alt=""
                    className="h-11 w-11 rounded-full"
                  />
                  <div>
                    <h3 className="text-[#072E33] font-bold mt-2">
                      {full_name}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
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
                    <a href="/Pin">
                      <AiOutlineUserAdd
                        className="text-[#072E33] text-[20px] gap-6"
                        size={24}
                      />
                    </a>
                  </div>
                  <div className="pt-1">
                    <BsGrid className="text-[#072E33] text-[20px]" size={24} />
                    {/* <a href="http://"></a> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Calendar />
              </div>
              <div className="container rounded-lg flex flex-col gap-2 p-2 table-fixed md:table-fixed bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        {headers.map((header) => (
                          <th
                            key={header}
                            className="px-4 py-2 bg-gray-100 font-bold text-[#072E33]"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {events.slice(0, 5).map((row, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } hover:bg-gray-100 transition-colors duration-300`}
                        >
                          <td className="px-4 py-3">{row.Title}</td>
                          <td className="px-4 py-3">{row.Room}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {events.length > 5 && (
                    <div className="flex justify-center mt-4">
                      <div className="btn-group">
                        {[...Array(Math.ceil(events.length / 5)).keys()].map(
                          (page) => (
                            <button
                              key={page}
                              className={`btn btn-sm ${
                                page * 5 === 0
                                  ? "bg-[#072E33] text-white"
                                  : "bg-white text-[#072E33]"
                              }`}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page + 1}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
