// import React, { useState, useEffect } from "react";
// import img1 from "../../Assets/cutie.jpg";
// import img2 from "../../Assets/animation.jpg";



// const Chart = ({meetingObjects}) => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const timePeriods = ["8AM", "9AM", "10AM","11PM", "12PM", "1PM", "2PM","3PM", "4PM","5PM", "6PM"];

 

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentDate(new Date()), 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();

//   return (
//     <div className="container flex rounded-lg mx-auto bg-white items-center">
//       <div className="flex relative px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 gap-8">
//         {/* 11AM */}

//         {meetingObjects.map((item)=>
//         (
//           <div className="flex flex-col gap-4">
//           <div className="bg-red-100/50 h-11 sm:h-12 md:h-14 lg:h-16 xl:h-18 gap-1 flex pt-1 text-red-600 relative top-8 w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 font-semibold text-sm">
//             <span className="py-3 rounded-l-lg bg-red-500 mr-2"></span>
//             about {hours}:{minutes}

//             {item.meetingName}
//             <div className="flex">
//               <img src={img1} alt="" className="h-8 w-8" />
//               <img
//                 src={img2}
//                 alt=""
//                 className="h-8 w-8 absolute left-36 rounded-full"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col-reverse absolute top-[-1rem] left-[-35rem] gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 font-mono text-gray-500">
//             11 AM
//           </div>
//         </div>
//         ))}
       

//         {timePeriods.map((item) => (
//           <span className=" relative top-44 p-2 -left-20">{item}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chart;
import React from "react";
import { Epg, Layout } from "planby";
import { useApp } from "../chart/useApp";
import { Timeline, ChannelItem, ProgramItem } from "../timeline";

const Chart = () => {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return ( 
    <div className="container flex rounded-lg mx-auto items-center">
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
  );
}
export default Chart;
