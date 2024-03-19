import React, { useEffect, useState } from "react";
import { Epg, Layout } from "planby";
import { useApp } from "../chart/useApp";
import { Timeline, ChannelItem, ProgramItem } from "../timeline";
import AddMeeting from "../schedules/AddMeeting";

const Chart = () => {
  const { isLoading, getEpgProps, getLayoutProps, addMeetingToEpg } = useApp();

  const [showAddMeeting, setShowAddMeeting] = useState(false);

  const HandleAddMeeting = () => {
    setShowAddMeeting(true);
  };

  const handleCloseAddMeeting = () => {
    setShowAddMeeting(false);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col">
        <button
          className="bg-white p-4 cursor-pointer text-[#072e33] text-lg rounded-2xl shadow-xl shadow-[#2e533f] font-bold w-full sm:w-auto"
          onClick={HandleAddMeeting}
        >
          Add Meeting
        </button>
        </div>
        <div className="flex-grow overflow-hidden rounded-lg mt-4 sm:mt-0">
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
      </div>
      {showAddMeeting && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <AddMeeting
            onCloseAddMeeting={handleCloseAddMeeting}
            addMeetingToEpg={addMeetingToEpg}
          />
        </div>
      )}
    </div>
  );
};

export default Chart;