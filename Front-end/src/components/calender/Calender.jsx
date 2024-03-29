import React, { useState } from "react";
import { format, addDays, setMonth, setDate, getDaysInMonth } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { IoCalendarOutline } from "react-icons/io5";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateData, setDateData] = useState(null);
  

  const handleDateClick = async (date) => {
    setSelectedDate(date);
    try {
      const response = await fetch(
        `/api/date-data?date=${date.toISOString().slice(0, 10)}`
      );
      const data = await response.json();
      setDateData(data);
    } catch (error) {
      console.error("Error fetching date data:", error);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) =>
      setMonth(prevMonth, prevMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) =>
      setMonth(prevMonth, prevMonth.getMonth() + 1)
    );
  };

  const renderCalendar = () => {
    const days = [];
    const startDate = setDate(
      setMonth(currentMonth, currentMonth.getMonth()),
      1
    );
    const totalDaysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const daysBeforeMonth = firstDayOfMonth.getDay();
    const daysAfterMonth = 6 - lastDayOfMonth.getDay();

    // Add days from previous month
    for (let i = daysBeforeMonth - 1; i >= 0; i--) {
      const date = addDays(startDate, -i);
      days.push(
        <div
          key={`prev-${i}`}
          className="bg-gray-300 px-5 py-5 text-xs w-[calc(100%/7)] md:w-[calc(100%/7)] font-semibold rounded-lg"
        >
          <div className="text-gray-500 flex justify-center text-[15px] font-mono mb-2">
            {format(date, "E")}
          </div>
          <div className="text-gray-500 flex justify-center items-center text-[25px] font-bold font-mono">
            {format(date, "d")}
          </div>
        </div>
      );
    }

    // Add days from current month
    for (let i = 0; i < totalDaysInMonth; i++) {
      const date = addDays(startDate, i);
      const isSelected =
        selectedDate &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getDate() === selectedDate.getDate() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <div
          key={i}
          className={`bg-white px-5 py-5 text-xs w-[calc(100%/7)] md:w-[calc(100%/7)] font-semibold rounded-lg ${
            isSelected
              ? "text-[#072e33] shadow-lg transform scale-123  lg:shadow-lg xl:shadow-lg 2xl:shadow-[#07552A] -top-1"
              : "shadow-gray-500"
          }`}
          onClick={() => handleDateClick(date)}
        >
          <div className="text-[#072e33] flex justify-center text-[15px] font-mono mb-2">
            {format(date, "E")}
          </div>
          <div className="text-[#072e33] flex justify-center items-center text-[25px] font-bold font-mono">
            {format(date, "d")}
            {isSelected && (
              <span className="absolute bottom-[15px] left-1/2 transform -translate-x-1/2 w-2 h-2 text-[#072e33] rounded-full">
                .
              </span>
            )}
          </div>
        </div>
      );
    }

    // Add days from next month
    for (let i = 1; i <= daysAfterMonth; i++) {
      const date = addDays(lastDayOfMonth, i);
      days.push(
        <div
          key={`next-${i}`}
          className="bg-gray-300 px-5 py-5 text-xs w-[calc(100%/7)] md:w-[calc(100%/7)] font-semibold rounded-lg"
        >
          <div className="text-gray-500 flex justify-center text-[15px] font-mono mb-2">
            {format(date, "E")}
          </div>
          <div className="text-gray-500 flex justify-center items-center text-[25px] font-bold font-mono">
            {format(date, "d")}
          </div>
        </div>
      );
    }

    return (
      <div className="container flex flex-col">
        <div className="calendar-container overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-center gap-4">
            {days}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container flex flex-col sm:items-center">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl">
            <div className="text-[#072e33] font-bold font-mono relative sm:left-[-29.5rem]">
              {format(currentMonth, "MMMM yyyy")}
            </div>
          </h1>
          <IoCalendarOutline className="text-[#072e33] font-bold font-mono ml-2 relative sm:left-[-29rem] text-xl" />
        </div>
        <div className="flex items-center ml-auto">
          <button
            className="outline-none text-[#072e33]"
            onClick={handlePrevMonth}
          >
            <ChevronLeftIcon className="w-6 h-6 relative sm:left-[28rem]" />
          </button>
          <button
            className="outline-none text-[#072e33]"
            onClick={handleNextMonth}
          >
            <ChevronRightIcon className="w-6 h-6 relative sm:left-[28rem]" />
          </button>
        </div>
      </div>
      {renderCalendar()}
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}
      </style>
    </div>
  );
};

export default Calendar;
