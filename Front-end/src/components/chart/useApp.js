import React from "react";
import { fetchChannels, fetchEpg } from "../helpers";
import { useEpg } from "planby";
import { theme } from "../helpers/theme";

export function useApp() {
  const [channels, setChannels] = React.useState([]);
  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  
  const screenWidth = window.innerWidth;

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: screenWidth > 768 ? 6200 : 4400,
    sidebarWidth: screenWidth > 768 ? 100 : 0,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: "2024-03-19T00:00:00",
    endDate: "2024-03-19T24:00:00",
    isBaseTimeFormat: true,
    theme,
  });

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

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, addMeetingToEpg, isLoading };
}