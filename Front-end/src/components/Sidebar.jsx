import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography,
} from "@mui/material";
import {
  ChevronRightOutlined,
  HomeOutlined,
  WorkOutlined,
  DescriptionOutlined,
  CheckBoxOutlined,
  CalendarMonthOutlined,
  PeopleOutlined,
  PlaceOutlined,
  FolderOpenOutlined,
  MeetingRoomOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { RadioGroup, FormControlLabel } from "@mui/material";

const navItems = [
  {
    text: "Main",
    icon: null,
  },
  {
    text: "Home",
    icon: <HomeOutlined />,
  },
  {
    text: "Jobs",
    icon: <WorkOutlined />,
  },
  {
    text: "Resumes",
    icon: <DescriptionOutlined />,
  },
  {
    text: "Tasks",
    icon: <CheckBoxOutlined />,
  },
  {
    text: "Calendar",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Admin",
    icon: null,
  },
  {
    text: "Users",
    icon: <PeopleOutlined />,
  },
  {
    text: "Locations",
    icon: <PlaceOutlined />,
  },
  {
    text: "Job Boards",
    icon: <FolderOpenOutlined />,
  },
  {
    text: "Categories",
    icon: null,
  },
  {
    text: "Business",
    type: "radio",
  },
  {
    text: "Working",
    type: "radio",
  },
  {
    text: "Management",
    type: "radio",
  },
];

const Sidebar = ({ user, drawerWidth, isNonMobile }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const handleRadioChange = (event) => {
    const selectedText = event.target.value.toLowerCase();
    navigate(`/${selectedText}`);
    setActive(selectedText);
  };

  return (
    <Box component="nav">
      <Drawer
        open
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            backgroundColor: "blue",
            color: "white",
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
          },
        }}
      >
        <Box width="100%">
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={"white"}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <MeetingRoomOutlined />
                <Typography variant="h4" fontWeight="bold">
                  Meets
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          <List>
            {navItems.map(({ text, icon, type }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              if (type === "radio") {
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <RadioGroup
                      value={active}
                      onChange={handleRadioChange}
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value={lcText}
                        control={<Radio />}
                        label={text}
                        sx={{
                          color: active === lcText ? "blue" : "white",
                          "& .MuiRadio-root": {
                            color: active === lcText ? "blue" : "white",
                          },
                        }}
                      />
                    </RadioGroup>
                  </ListItem>
                );
              }
              const lcText = text.toLowerCase();
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor: active === lcText ? "white" : "transparent",
                      color: active === lcText ? "blue" : "white",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color: active === lcText ? "blue" : "white",
                      }}
                    >
                      {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
        </Box>
        <Box position="absolute" bottom="2rem">
          <Divider />
          <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.9rem"
                sx={{ color: "white" }}
              >
                {user.name}
              </Typography>
              <Typography fontSize="0.8rem" sx={{ color: "white" }}>
                {user.occupation}
              </Typography>
            </Box>
          </FlexBetween>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
