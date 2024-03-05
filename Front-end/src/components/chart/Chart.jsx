import React from "react";
import img1 from "../../Assets/cutie.jpg";
import img2 from "../../Assets/animation.jpg";

const Chart = () => {
  return (
    <div className="container flex rounded-lg mx-auto px-[-5rem] bg-white items-center">
      <div className="flex relative px-[2rem] pl-16 gap-16">
        {/* 10AM */}

        <div className="flex  flex-col gap-5 ">
          <div className="bg-green-100/50 h-[38px] w-[500px] flex text-green-500 font-semibold text-sm relative top-4 ">
            <span className="py-5 pt-2 p-[0.1rem] rounded-l-lg bg-green-400 mr-3"></span>
            about 30 minutes
            <img
              src={img1}
              alt=""
              className="h-8 w-8 relative left-[20.5rem] top-[0.1rem]"
            />
            <img
              src={img2}
              alt=""
              className="h-8 w-8 absolute rounded-full  left-[29.5rem] top-[0.1rem]"
            />
          </div>
          <div className="flex flex-col-reverse gap-4 relative top-[-0.8rem] font-mono text-gray-500">
            10 AM
            {Array.from({ length: 19 }).map((_, index) => (
              <div
                key={index}
                className="h-1 w-1 rounded-sm bg-gray-500/20"
              ></div>
            ))}
          </div>
        </div>

        {/* 11AM */}

        <div className="flex flex-col relative top-[-1.8rem] pt-2 left-[-37rem] gap-5 ">
          <div className="bg-red-100/50 h-[37px] gap-1 flex pt-1  text-red-600 relative top-[6rem] left-[8rem] w-[255px] font-semibold text-sm ">
            <span className="py-4 p-[0.1rem] rounded-l-lg bg-red-500 mr-2"></span>
            about 2 hour
            <div className=" flex ">
              <img src={img1} alt="" className="h-8 w-8 left-28 relative " />
              <img
                src={img2}
                alt=""
                className="h-8 w-8 absolute left-[14.5rem] rounded-full  "
              />
            </div>
          </div>
          <div className="flex flex-col-reverse absolute top-[8.5rem] left-32 gap-4 font-mono text-gray-500">
            11 AM
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="h-1 w-1 rounded-sm bg-gray-500/20"
              ></div>
            ))}
          </div>
        </div>

        {/* 12AM & 2PM  */}
        <div className="flex  flex-col relative top-[5.8rem] left-[-40rem] pt-2 gap-5 ">
          <div className="bg-blue-100/50 h-[38px] pt-1 flex items-center text-blue-600 font-semibold relative top-[2.5rem] left-[-3rem] w-[260px] text-sm ">
            <span className="py-5  p-[0.1rem] rounded-l-lg bg-blue-500/100 mr-4"></span>
            about 2 hours
            <div className=" flex ml-[-49px]">
              <img
                src={img1}
                alt=""
                className="h-8 w-8 left-[9rem] relative "
              />
              <img
                src={img2}
                alt=""
                className="h-8 w-8 absolute left-56 rounded-full "
              />
              <div className="text-blue-500/100 relative top-[-1rem] left-[12rem]">
                vacations
              </div>
            </div>

          </div>{" "}
          <div className="flex items-center relative  left-[13.7rem]">
            <hr className="bg-blue-500/100 w-[6rem] h-[0.2rem] relative bottom-4" />
            <div className="bg-blue-100/50 h-[38px] pt-1 flex items-center text-blue-600 font-semibold relative bottom-5 left-r2em] w-[200px] text-sm ">
              <span className="py-5  p-[0.2rem]  bg-blue-500/100 mr-4"></span>
              about 1:30 hours
              <div className=" flex ">
                <img
                  src={img2}
                  alt=""
                  className="h-8 w-8 absolute left-44 top-1 rounded-full "
                />
              </div>
            </div>{" "}
          </div>
          <div className="flex flex-col-reverse absolute top-[4.5rem] left-[-3rem] gap-4 font-mono text-gray-500">
            {" "}
            12 AM
            {Array.from({ length: 13 }).map((_, index) => (
              <div
                key={index}
                className="h-1 w-1 rounded-sm bg-gray-500/20"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse absolute top-[10.2rem] left-[22rem] gap-4 font-mono text-gray-500">
          {" "}
          2 PM
          {Array.from({ length: 13 }).map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 rounded-sm bg-gray-500/20"
            ></div>
          ))}
        </div>

        {/* 3AM, 4AM & 5AM */}
        <div className="flex  flex-col relative top-[15rem] left-[-54rem] gap-5 ">
          <div className="bg-yellow-500/25 h-[37px] pt-5 flex font-semibold text-yellow-700 text-sm rounded-xl relative top-[1rem] left-[-0.1rem] w-[300px]">
            <span className="py-2 p-[0.15rem] mt-[-1rem] relative top-[-0.1rem] rounded-l-lg bg-yellow-600/50 mr-4"></span>
            about 25 minutes
            <img
              src={img1}
              alt=""
              className="h-8 w-8 relative left-[7rem] top-[-1rem]"
            />
            <img
              src={img2}
              alt=""
              className="h-8 w-8 absolute rounded-full  left-[16.5rem] top-[0.2rem]"
            />
            <img
              src={img2}
              alt=""
              className="h-8 w-8 relative rounded-full left-[7.5rem] top-[-1rem]"
            />
          </div>
          <div className="flex flex-col-reverse absolute top-[1.5rem] left-[-0.1rem] gap-4 font-mono text-gray-500">
            3 AM
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-1 w-1 rounded-sm bg-gray-500/20"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse absolute top-[16.4rem] left-[35rem] gap-4 font-mono text-gray-500">
          4 AM
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 rounded-sm bg-gray-500/20"
            ></div>
          ))}
        </div>
        <div className="flex flex-col-reverse absolute top-[16.4rem] left-[41rem] gap-4 font-mono text-gray-500">
          {" "}
          5 AM
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 rounded-sm bg-gray-500/20"
            ></div>
          ))}
        </div>

        {/* 6AM & 7AM */}

        <div className="flex  flex-col relative top-[20rem] left-[-58.5rem] gap-5 ">
          <div className=" bg-[#c743fa] h-[37px] pt-2 flex  text-white font-semibold text-sm rounded-xl relative top-[1rem] left-[-0.1rem] w-[200px]">
            <span className="py-4 p-[0.18rem] mt-[-0.4rem] rounded-l-lg bg-[#e3a1fe] mr-4"></span>
            about 1 hour
            <img
              src={img2}
              alt=""
              className="h-8 w-8 relative rounded-full left-[1.8rem] top-[-0.4rem]"
            />
            <img
              src={img1}
              alt=""
              className="h-8 w-8 absolute rounded-full  left-[9.5rem] top-[0.1rem]"
            />
          </div>
          <img
              src={img1}
              alt=""
              className="h-8 w-8 absolute rounded-full  left-[10.6rem] top-[1.1rem]"
            />
          <div className="flex flex-col-reverse absolute top-[2.6rem] left-[-0.1rem] gap-4 font-mono text-gray-500">
            6 AM
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-1 w-1 rounded-sm bg-gray-500/20"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse absolute top-[22.5rem] left-[51rem] gap-4 font-mono text-gray-500">
          7 AM
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 rounded-sm bg-gray-500/20"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
