// import React, {useState, useEffect} from "react";
// import img1 from "../../Assets/cutie.jpg";
// import img2 from "../../Assets/animation.jpg";

// const Chart = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentDate(new Date()), 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();

//   return (
//     <div className="container flex rounded-lg mx-auto bg-white items-center">
//       <div className="flex relative px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 gap-8">
//         {/* 10AM */}
//         <div className="flex flex-col gap-4">
//           <div className="bg-green-100/50 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 flex text-green-500 font-semibold text-sm relative top-4">
//             <span className="py-3 rounded-l-lg bg-green-400 mr-3"></span>
//             about {hours}:{minutes}
//             <img src={img1} alt="" className="h-8 w-8 ml-auto" />
//             <img src={img2} alt="" className="h-8 w-8 rounded-full ml-2" />
//           </div>
//           <div className="flex flex-col-reverse gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 relative top-[-0.8rem] font-mono text-gray-500">
//             10 AM
//             {Array.from({ length: 19 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-0.5 sm:h-0.75 md:h-1 lg:h-1.5 xl:h-2 bg-gray-500/20"
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* 11AM */}
//         <div className="flex flex-col gap-4">
//           <div className="bg-red-100/50 h-11 sm:h-12 md:h-14 lg:h-16 xl:h-18 gap-1 flex pt-1 text-red-600 relative top-8 w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 font-semibold text-sm">
//             <span className="py-3 rounded-l-lg bg-red-500 mr-2"></span>
//             about {hours}:{minutes}
//             <div className="flex">
//               <img src={img1} alt="" className="h-8 w-8" />
//               <img
//                 src={img2}
//                 alt=""
//                 className="h-8 w-8 absolute left-36 rounded-full"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col-reverse absolute top-[-1rem] left-[-37rem] gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 font-mono text-gray-500">
//             11 AM
//             {Array.from({ length: 16 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-0.5 sm:h-0.75 md:h-1 lg:h-1.5 xl:h-2 bg-gray-500/20"
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* 12AM & 2PM */}
//         <div className="flex flex-col gap-4">
//           <div className="bg-blue-100/50 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 gap-1 flex items-center text-blue-600 font-semibold relative top-7 left-[-11rem] w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 text-sm">
//             <span className="py-3 p-[0.1rem] rounded-l-lg bg-blue-500/100 mr-4"></span>
//             about {hours}:{minutes}
//             <div className="flex ml-[-49px]">
//               <img src={img1} alt="" className="h-8 w-8 left-[9rem]" />
//               <img
//                 src={img2}
//                 alt=""
//                 className="h-8 w-8 absolute left-56 rounded-full"
//               />
//               <div className="text-blue-500/100 relative top-[-1rem] left-[12rem]">
//                 vacations
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center relative left-[13.7rem]">
//             <hr className="bg-blue-500/100 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 sm:h-0.75 md:h-1 lg:h-1.5 xl:h-2 bg-gray-500/20" />
//             <div className="bg-blue-100/50 h-[38px] pt-1 flex items-center text-blue-600 font-semibold relative bottom-5 left-r2em] w-[200px] text-sm ">
//               <span className="py-5  p-[0.2rem]  bg-blue-500/100 mr-4"></span>
//               about {hours}:{minutes}
//               <div className=" flex ">
//                 <img
//                   src={img2}
//                   alt=""
//                   className="h-8 w-8 absolute left-44 top-1 rounded-full "
//                 />
//               </div>
//             </div>{" "}
//           </div>
//           <div className="flex flex-col-reverse absolute top-[4.5rem] left-[-3rem] gap-4 font-mono text-gray-500">
//             {" "}
//             12 AM
//             {Array.from({ length: 13 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-1 w-1 rounded-sm bg-gray-500/20"
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col-reverse absolute z-20 top-[10.2rem] left-[22rem] gap-4 font-mono text-gray-500">
//           {" "}
//           2 PM
//           {Array.from({ length: 13 }).map((_, index) => (
//             <div
//               key={index}
//               className="h-1 w-1 rounded-sm bg-gray-500/20"
//             ></div>
//           ))}
//         </div>

//         {/* 3AM, 4AM & 5AM */}
//         <div className="flex  flex-col relative top-[15rem] left-[-54rem] gap-5 ">
//           <div className="bg-yellow-500/25 h-[37px] pt-5 flex font-semibold text-yellow-700 text-sm rounded-xl relative top-[1rem] left-[-0.1rem] w-[300px]">
//             <span className="py-2 p-[0.15rem] mt-[-1rem] relative top-[-0.1rem] rounded-l-lg bg-yellow-600/50 mr-4"></span>
//             about {hours}:{minutes}
//             <img
//               src={img1}
//               alt=""
//               className="h-8 w-8 relative left-[7rem] top-[-1rem]"
//             />
//             <img
//               src={img2}
//               alt=""
//               className="h-8 w-8 absolute rounded-full  left-[16.5rem] top-[0.2rem]"
//             />
//             <img
//               src={img2}
//               alt=""
//               className="h-8 w-8 relative rounded-full left-[7.5rem] top-[-1rem]"
//             />
//           </div>
//           <div className="flex flex-col-reverse absolute top-[1.5rem] left-[-0.1rem] gap-4 font-mono text-gray-500">
//             3 AM
//             {Array.from({ length: 8 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-1 w-1 rounded-sm bg-gray-500/20"
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col-reverse absolute top-[16.4rem] left-[35rem] gap-4 font-mono text-gray-500">
//           4 AM
//           {Array.from({ length: 8 }).map((_, index) => (
//             <div
//               key={index}
//               className="h-1 w-1 rounded-sm bg-gray-500/20"
//             ></div>
//           ))}
//         </div>
//         <div className="flex flex-col-reverse absolute top-[16.4rem] left-[41rem] gap-4 font-mono text-gray-500">
//           {" "}
//           5 AM
//           {Array.from({ length: 8 }).map((_, index) => (
//             <div
//               key={index}
//               className="h-1 w-1 rounded-sm bg-gray-500/20"
//             ></div>
//           ))}
//         </div>

//         {/* 6AM & 7AM */}

//         <div className="flex  flex-col relative top-[20rem] left-[-58.5rem] gap-5 ">
//           <div className=" bg-[#c743fa] h-[37px] pt-2 flex  text-white font-semibold text-sm rounded-xl relative top-[1rem] left-[-0.1rem] w-[200px]">
//             <span className="py-4 p-[0.18rem] mt-[-0.4rem] rounded-l-lg bg-[#e3a1fe] mr-4"></span>
//             about {hours}:{minutes}
//             <img
//               src={img2}
//               alt=""
//               className="h-8 w-8 relative rounded-full left-[1.8rem] top-[-0.4rem]"
//             />
//             <img
//               src={img1}
//               alt=""
//               className="h-8 w-8 absolute rounded-full  left-[9.5rem] top-[0.1rem]"
//             />
//           </div>
//           <img
//               src={img1}
//               alt=""
//               className="h-8 w-8 absolute rounded-full  left-[10.6rem] top-[1.1rem]"
//             />
//           <div className="flex flex-col-reverse absolute top-[2.6rem] left-[-0.1rem] gap-4 font-mono text-gray-500">
//             6 AM
//             {Array.from({ length: 3 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-1 w-1 rounded-sm bg-gray-500/20"
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col-reverse absolute top-[22.5rem] left-[51rem] gap-4 font-mono text-gray-500">
//           7 AM
//           {Array.from({ length: 3 }).map((_, index) => (
//             <div
//               key={index}
//               className="h-1 w-1 rounded-sm bg-gray-500/20"
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chart;
import React from "react";
import img1 from "../../Assets/cutie.jpg";
import img2 from "../../Assets/animation.jpg";

const Chart = ({ startTime, endTime }) => {
  const getTimeSlotDuration = (start, end) => {
    const startDate = new Date(`2024-01-01 ${start}`);
    const endDate = new Date(`2024-01-01 ${end}`);
    const durationInMinutes = (endDate - startDate) / (1000 * 60);
    return durationInMinutes;
  };

  const renderTimeSlots = (duration) => {
    const timeSlots = [];

    for (let i = 0; i < duration; i++) {
      timeSlots.push(
        <div key={i} className="h-1 w-1 rounded-sm bg-gray-500/20"></div>
      );
    }

    return timeSlots;
  };

  const renderTimeSlot = (start, end, color, images) => {
    const duration = getTimeSlotDuration(start, end);
    const imageComponents = images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt=""
        className={`h-8 w-8 absolute rounded-full left-${
          index * 8 + 14
        } top-[0.1rem]`}
      />
    ));

    return (
      <div
        key={`${start}-${end}`}
        className={`flex flex-col gap-5 relative top-${-5 + duration * 0.3}rem`}
      >
        <div
          className={`bg-${color}-100/50 h-[${
            duration * 2
          }px] flex text-${color}-500 font-semibold text-sm relative top-4`}
        >
          <span
            className={`py-5 pt-2 p-[0.1rem] rounded-l-lg bg-${color}-400 mr-3`}
          ></span>
          about {duration} minutes
          {imageComponents}
        </div>
        <div className="flex flex-col-reverse gap-4 relative top-[-0.8rem] font-mono text-gray-500">
          {start}
          {renderTimeSlots(duration)}
        </div>
      </div>
    );
  };

  return (
    <div className="container flex rounded-lg mx-auto px-[-5rem] bg-white items-center">
      <div className="flex relative px-[2rem] pl-16 gap-16">
        {renderTimeSlot(startTime, endTime, "green", [img1, img2])}
        {renderTimeSlot(startTime, endTime, "red", [img1, img2])}
        {renderTimeSlot(startTime, endTime, "blue", [img1, img2])}
        {renderTimeSlot(startTime, endTime, "yellow", [img1, img2])}
        {renderTimeSlot(startTime, endTime, "gray", [img1, img2])}
        {renderTimeSlot(startTime, endTime, "#c743fa", [img1, img2])}
      </div>
    </div>
  );
};

export default Chart;