import React, { useState } from "react";
import { format, addDays, setMonth, setYear, setDate } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { IoCalendarOutline } from "react-icons/io5";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(
    setYear(setMonth(new Date(), 4), 2023)
  );

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => addDays(prevMonth, -30));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => addDays(prevMonth, 30));
  };

  const renderCalendar = () => {
    const days = [];
    const startDate = setDate(setMonth(currentMonth, 4), 20);

    for (let i = 0; i < 12; i++) {
      const date = addDays(startDate, i);
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={i}
          className={`bg-white square-full px-3 py-3 text-xs w-[5.5rem] h-[5rem] font-semibold rounded-lg ${
            isSelected
              ? "text-white shadow-lg transform scale-123  lg:shadow-lg xl:shadow-lg 2xl:shadow-slate-500 -top-1"
              : "shadow-gray-500"
          }`}
          onClick={() => handleDateClick(date)}
        >
          <div className="text-blue-800/65 flex justify-center text-[15px] font-mono mb-2">
            {format(date, "E")}
          </div>
          <div className="text-blue-800/100 flex flex-col justify-center items-center text-[25px] font-bold font-mono">
            {format(date, "d")}
            {isSelected && (
              <span className=" bottom-[-8px] left-1/2 transform translate-x-[-50%] w-2 h-2 text-blue-800/100 rounded-full ">
                .
              </span>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="container flex flex-col">
        <div className="flex items-center justify-center gap-4">{days}</div>
      </div>
    );
  };

  return (
    <div className="container flex flex-col">
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center">
          <h1 className="text-2xl">
            <div className="text-blue-800/100 font-bold font-mono">
              {format(currentMonth, "MMMM yyyy")}
            </div>
          </h1>
          <IoCalendarOutline className="text-blue-800 font-bold font-mono ml-2" />
        </div>
        <div>
          <button
            className="outline-none text-gray-500 "
            onClick={handlePrevMonth}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            className="outline-none text-gray-500 "
            onClick={handleNextMonth}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
