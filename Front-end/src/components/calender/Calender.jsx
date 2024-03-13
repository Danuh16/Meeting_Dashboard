import React, { useState } from "react";
import { format, addDays, setMonth, setYear, setDate } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { IoCalendarOutline } from "react-icons/io5";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => setMonth(prevMonth, prevMonth.getMonth() - 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => setMonth(prevMonth, prevMonth.getMonth() + 1));
  };

  const renderCalendar = () => {
    const days = [];
    const startDate = setDate(setMonth(currentMonth, 0), 1);

    for (let i = 0; i < 32; i++) {
      const date = addDays(startDate, i);
      const isSelected =
        selectedDate &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getDate() === selectedDate.getDate();

      days.push(
        <div
          key={i}
          className={`bg-white square-full px-3 py-3 text-xs w-[calc(100%/7)] h-[10rem] md:w-[calc(100%/7)] md:h-[7rem] font-semibold rounded-lg ${
            isSelected
              ? "text-[#ECAB22] shadow-lg transform scale-123  lg:shadow-lg xl:shadow-lg 2xl:shadow-slate-500 -top-1"
              : "shadow-gray-500"
          }`}
          onClick={() => handleDateClick(date)}
        >
          <div className="text-[#ECAB22] flex justify-center text-[15px] font-mono mb-2">
            {format(date, "E")}
          </div>
          <div className="text-[#ECAB22] flex flex-col justify-center items-center text-[25px] font-bold font-mono">
            {format(date, "d")}
            {isSelected && (
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-2 h-2 text-[#ECAB22] rounded-full bg-white">
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
    <div className="container flex flex-col sm:items-center">
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center">
      <h1 className="text-2xl">
        <div className="text-[#ECAB22] font-bold font-mono">
          {format(currentMonth, "MMMM yyyy")}
        </div>
      </h1>
      <IoCalendarOutline className="text-[#ECAB22] font-bold font-mono ml-2" />
    </div>
    <div>
      <button
        className="outline-none text-[#ECAB22] "
        onClick={handlePrevMonth}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        className="outline-none text-[#ECAB22] "
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
