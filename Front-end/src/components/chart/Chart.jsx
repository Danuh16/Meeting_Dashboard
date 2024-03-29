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
  const userSession = JSON.parse(localStorage.getItem("userSession"));
  const access_token = userSession?.access_token;

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const getDynamicStartDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0] + "T00:00:00";
  };

  const getDynamicEndDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0] + "T24:00:00";
  };

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    // sidebarWidth: 250,
    itemHeight: 80,
    // isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: getDynamicStartDate(),
    endDate: getDynamicEndDate(),
    isBaseTimeFormat: true,
    theme,
  });
  const deleteProgram = async (programId) => {
    try {
      const response = await fetch(
        `http://172.20.10.6:8000/api/event/delete/${programId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.ok) {
        const updatedEpg = epg.filter((program) => program.id !== programId);
        setEpg(updatedEpg);
      } else {
        throw new Error("Failed to delete program");
      }
    } catch (error) {
      console.error("Error deleting program:", error);
    }
  };

  const fetchEpg = async (date) => {
    try {
      const response = await fetch(
        `http://172.20.10.6:8000/api/event/events-by-date?date=${date
          .toISOString()
          .slice(0, 10)}`
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
    const today = new Date();
    const prevDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() - i);
      return date;
    });

    const epgData = await Promise.all(prevDates.map((date) => fetchEpg(date)));
    const flattenedEpg = epgData.reduce((acc, curr) => [...acc, ...curr], []);
    setEpg(flattenedEpg);

    const channels = await fetchChannels();
    setChannels(channels);

    setIsLoading(false);
  }, []);

  const addMeetingToEpg = (newMeeting) => {
    setEpg([...epg, newMeeting]);
  };

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return {
    getEpgProps,
    getLayoutProps,
    addMeetingToEpg,
    isLoading,
    deleteProgram,
    epg,
  };
}

const Chart = ({ selectedDate }) => {
  const {
    isLoading,
    getEpgProps,
    getLayoutProps,
    addMeetingToEpg,
    deleteProgram,
    epg,
  } = useApp();

  const [showAddMeeting, setShowAddMeeting] = useState(false);

  const handleCloseAddMeeting = () => {
    setShowAddMeeting(false);
  };

  const handleDeleteProgram = async (programId) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this program?"
    );
    if (confirmation) {
      await deleteProgram(programId);
    }
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

  const filteredEpg = React.useMemo(() => {
    if (!selectedDate) return epg;
    return epg.filter((program) => {
      const programDate = new Date(program.since).toISOString().slice(0, 10);
      return programDate === selectedDate.toISOString().slice(0, 10);
    });
  }, [epg, selectedDate]);

  return (
    <div className="container flex flex-col rounded-lg h-64 items-center">
      <Epg isLoading={isLoading} {...getEpgProps()}>
        <Layout
          {...getLayoutProps()}
          renderTimeline={(props) => <Timeline {...props} />}
          renderProgram={({ program, ...rest }) => (
            <ProgramItem
              key={program.data.id}
              program={program}
              onDelete={() => handleDeleteProgram(program.data.title)}
              {...rest}
            />
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
      {selectedDate && (
        <div className="mt-4">
          <pre>{JSON.stringify(filteredEpg, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Chart;
