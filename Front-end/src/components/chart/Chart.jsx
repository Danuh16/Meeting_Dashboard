import React, { useState, useEffect } from "react";
import img1 from "../../Assets/cutie.jpg";
import img2 from "../../Assets/animation.jpg";



const Chart = ({meetingObjects}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const timePeriods = ["8AM", "10AM", "12PM", "2PM", "4PM", "6PM"];

 

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  return (
    <div className="container flex rounded-lg mx-auto bg-white items-center">
      <div className="flex relative px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 gap-8">
        {/* 11AM */}

        {meetingObjects.map((item)=>
        (
          <div className="flex flex-col gap-4">
          <div className="bg-red-100/50 h-11 sm:h-12 md:h-14 lg:h-16 xl:h-18 gap-1 flex pt-1 text-red-600 relative top-8 w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 font-semibold text-sm">
            <span className="py-3 rounded-l-lg bg-red-500 mr-2"></span>
            about {hours}:{minutes}

            {item.meetingName}
            <div className="flex">
              <img src={img1} alt="" className="h-8 w-8" />
              <img
                src={img2}
                alt=""
                className="h-8 w-8 absolute left-36 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse absolute top-[-1rem] left-[-37rem] gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 font-mono text-gray-500">
            11 AM
          </div>
        </div>
        ))}
       

        {timePeriods.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Chart;
// import React from "react";
// import img1 from "../../Assets/cutie.jpg";
// import img2 from "../../Assets/animation.jpg";

// const Chart = ({ startTime, endTime }) => {
//   const getTimeSlotDuration = (start, end) => {
//     const startDate = new Date(`2024-01-01 ${start}`);
//     const endDate = new Date(`2024-01-01 ${end}`);
//     const durationInMinutes = (endDate - startDate) / (1000 * 60);
//     return durationInMinutes;
//   };

//   const timePeriodS = ["8AM","10AM","12PM","2PM","4PM","6PM"]

//   const renderTimeSlots = (duration) => {
//     const timeSlots = [];

//     for (let i = 0; i < duration; i++) {
//       timeSlots.push(
//         <div key={i} className="h-1 w-1 rounded-sm bg-gray-500/20"></div>
//       );
//     }

//     return timeSlots;
//   };

//   const renderTimeSlot = (start, end, color, images) => {
//     const duration = getTimeSlotDuration(start, end);
//     const imageComponents = images.map((img, index) => (
//       <img
//         key={index}
//         src={img}
//         alt=""
//         className={`h-8 w-8 absolute rounded-full left-${
//           index * 8 + 14
//         } top-[0.1rem]`}
//       />
//     ));

//     return (
//       <div
//         key={`${start}-${end}`}
//         className={`flex flex-col gap-5 relative top-${-5 + duration * 0.3}rem`}
//       >
//         <div
//           className={`bg-${color}-100/50 h-[${
//             duration * 2
//           }px] flex text-${color}-500 font-semibold text-sm relative top-4`}
//         >
//           <span
//             className={`py-5 pt-2 p-[0.1rem] rounded-l-lg bg-${color}-400 mr-3`}
//           ></span>
//           about {duration} minutes
//           {imageComponents}
//         </div>
//         <div className="flex flex-col-reverse gap-4 relative top-[-0.8rem] font-mono text-gray-500">
//           {start}
//           {renderTimeSlots(duration)}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="container flex rounded-lg mx-auto px-4 md:px-0 bg-white items-center">
//       <div className="flex relative px-4 md:pl-16 gap-4 md:gap-16">

//         {renderTimeSlot(startTime, endTime, "green", [img1, img2])}

//         {/* {renderTimeSlot(startTime, endTime, "red", [img1, img2])}
//         {renderTimeSlot(startTime, endTime, "blue", [img1, img2])}
//         {renderTimeSlot(startTime, endTime, "yellow", [img1, img2])}
//         {renderTimeSlot(startTime, endTime, "gray", [img1, img2])}
//         {renderTimeSlot(startTime, endTime, "#c743fa", [img1, img2])} */}
//       </div>
//     </div>
//   );
// };

// export default Chart;
