import React, { useEffect, useState } from "react";
import { Epg, Layout } from "planby";
import { useApp } from "../chart/useApp";
import { Timeline, ChannelItem, ProgramItem } from "../timeline";
import AddMeeting from "../adds/AddMeeting";

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
    <div className="container flex flex-col rounded-lg  items-center">
      <h2
        className="bg-white p-4 relative left-[-31rem] cursor-pointer text-[#072e33] text-lg rounded-2xl shadow-xl shadow-[#2e533f] font-bold flex items-center justify-center"
        onClick={HandleAddMeeting}
      >
        <span>+</span> Add Meeting
      </h2>
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
      {showAddMeeting && (
        <div className="flex items-center justify-center">
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
