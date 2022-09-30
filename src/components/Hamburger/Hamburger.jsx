import React from "react";
import { Avatar } from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

export default function Hamburger() {
  return (
    <div className="hamburger">
      <ul className="hamburger__menu">
        <li className="active" key="1">
          <HomeRoundedIcon />
          <p>Home</p>
        </li>
        <li key="2">
          <ExploreOutlinedIcon />
          <p>Explore</p>
        </li>
        <li key="3">
          <PlayCircleFilledWhiteOutlinedIcon />
          <p>Shorts</p>
        </li>
        <li key="4">
          <SubscriptionsOutlinedIcon />
          <p>Subscriptions</p>
        </li>
      </ul>
      <div className="hamburger__splitter" />
      <ul className="hamburger__menu">
        <li key="1">
          <VideoLibraryOutlinedIcon />
          <p>Libraries</p>
        </li>
        <li key="2">
          <HistoryOutlinedIcon />
          <p>History</p>
        </li>
        <li key="3">
          <SmartDisplayOutlinedIcon />
          <p>Your videos</p>
        </li>
        <li key="4">
          <WatchLaterOutlinedIcon />
          <p>Watch later</p>
        </li>
        <li key="5">
          <ThumbUpOutlinedIcon />
          <p>Liked videos</p>
        </li>
      </ul>
      <div className="hamburger__splitter" />
      <ul className="hamburger__menu">
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="2">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="3">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="4">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="5">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="6">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="7">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="2">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="3">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="4">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="5">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="6">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="7">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="2">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="3">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="4">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="5">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="6">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="7">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="2">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="3">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="4">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Home</p>
        </li>
        <li key="5">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Explore</p>
        </li>
        <li key="6">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Shorts</p>
        </li>
        <li key="7">
          <Avatar
            className="header__avatar"
            src="https://avatars.githubusercontent.com/u/54453185?v=4"
          />
          <p>Subscriptions</p>
        </li>
      </ul>
    </div>
  );
}
