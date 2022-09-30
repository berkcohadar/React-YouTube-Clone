import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Avatar } from "@mui/material";

export default function Header() {
  return (
    <div className="header">
      <div className="header__start">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"
          alt="YouTube"
        ></img>
      </div>
      <div className="header__center">
        <input placeholder="Search" type="text" />
        <div className="header__search-icon">
          <SearchIcon />
        </div>
        {/* <KeyboardVoiceIcon /> */}
      </div>
      <div className="header__extra">
          <VideoCallOutlinedIcon />
          <NotificationsOutlinedIcon />
        <Avatar
          className="header__avatar"
          src="https://avatars.githubusercontent.com/u/54453185?v=4"
        />
      </div>
    </div>
  );
}
