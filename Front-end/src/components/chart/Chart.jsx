import React, { useState, useEffect } from "react";
import { fetchChannels } from "../helpers";
import { Epg, Layout, ChannelBox } from "planby";
import { useEpg } from "planby";
import { theme } from "../helpers/theme";
import AddMeeting from "../adds/AddMeeting";
import { Timeline, ProgramItem } from ".";

export function useApp() {
  const [channels, setChannels] = useState([]);
  const [epg, setEpg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 250,
    itemHeight: 80,
    // isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: "2024-03-25T00:00:00",
    endDate: "2024-03-25T24:00:00",
    isBaseTimeFormat: true,
    theme,
  });

  const fetchEpg = async () => {
    try {
      const response = await fetch(
        "https://gms.crosslightafrica.com/api/event/today-events/"
      );
      const data = await response.json();

      const transformedEpg = data.map((event) => ({
        id: event.id,
        title: event.name,
        description: event.pin,
        since: event.start_time,
        till: event.end_time,
        channelUuid: event.room,
      }));

      return transformedEpg;
    } catch (error) {
      console.error("Error fetching EPG:", error);
      return [];
    }
  };

  const handleFetchResources = React.useCallback(async () => {
    setIsLoading(true);
    const epg = await fetchEpg();
    const channels = await fetchChannels();
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  const addMeetingToEpg = (newMeeting) => {
    setEpg([...epg, newMeeting]);
  };

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, addMeetingToEpg, isLoading };
}

const Chart = () => {
  const { isLoading, getEpgProps, getLayoutProps, addMeetingToEpg } = useApp();

  const [showAddMeeting, setShowAddMeeting] = useState(false);

  // const HandleAddMeeting = () => {
  //   setShowAddMeeting(true);
  // };

  const handleCloseAddMeeting = () => {
    setShowAddMeeting(false);
  };

  const renderChannel = ({ channel }) => {
    const { position, name } = channel;
    return (
      <ChannelBox {...position}>
        <h4 className="bg-gray-100 -ml-1 -pl-5 py-4  w-48  text-[#ECAB22] font-medium rounded-xl">
          <span className="py-4 p-[0.2rem] ml-[-0.1rem] rounded-l-lg bg-[#07522A] mr-2"></span>
          {name}
        </h4>
      </ChannelBox>
    );
  };

  return (
    <div className="container flex flex-col rounded-lg  items-center">
      <Epg isLoading={isLoading} {...getEpgProps()}>
        <Layout
          {...getLayoutProps()}
          renderTimeline={(props) => <Timeline {...props} />}
          renderProgram={({ program, ...rest }) => (
            <ProgramItem key={program.data.id} program={program} {...rest} />
          )}
          renderChannel={renderChannel}
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
