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

import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

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
        <h4> SUBSCRIPTIONS</h4>
        <li key="1">
          <Avatar
            className="header__avatar"
            src="https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s88-c-k-c0x00ffffff-no-rj"
          />
          <p>Web Dev Simplified</p>
        </li>
        <li key="2">
          <Avatar
            className="header__avatar"
            src="https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj"
          />
          <p>Programming with Mosh</p>
        </li>
        <li key="3">
          <Avatar
            className="header__avatar"
            src="https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s88-c-k-c0x00ffffff-no-rj"
          />
          <p>Traversy Media</p>
        </li>
      </ul>
      <div className="hamburger__splitter" />
      <ul className="hamburger__menu">
        <h4> EXPLORE</h4>
        <li key="1">
          <TheatersOutlinedIcon />
          <p>Movies &amp; Shows</p>
        </li>
        <li key="2">
          <SportsEsportsOutlinedIcon />
          <p>Gaming</p>
        </li>
        <li key="3">
          <SensorsOutlinedIcon />
          <p>Live</p>
        </li>
        <li key="4">
          <CheckroomOutlinedIcon />
          <p>Fashion &amp; Beauty</p>
        </li>
        <li key="5">
          <LightbulbOutlinedIcon />
          <p>Learning</p>
        </li>
        <li key="6">
          <EmojiEventsOutlinedIcon />
          <p>Sports</p>
        </li>
      </ul>
      <div className="hamburger__splitter" />
      <ul className="hamburger__menu">
        <h4> MORE FROM YOUTUBE</h4>
      </ul>
      <div className="hamburger__splitter" />
      <ul className="hamburger__menu">
        <li key="1">
          <SettingsOutlinedIcon />
          <p>Settings</p>
        </li>
        <li key="2">
          <FlagOutlinedIcon />
          <p>Report History</p>
        </li>
        <li key="3">
          <HelpOutlineOutlinedIcon />
          <p>Help</p>
        </li>
        <li key="4">
          <FeedbackOutlinedIcon />
          <p>Send Feedback</p>
        </li>
      </ul>
      <div className="hamburger__splitter" />
      <div className="hamburger__footer">
        <a>About</a>
        <a>Press</a>
        <a>Copyright</a>
        <a>Contact us</a>
        <a>Creators</a>
        <a>Advertise</a>
        <a>Developers</a>
        <br/>
        <a>Terms</a>
        <a>Privacy</a>
        <a>Policy &amp; Safety</a>
        <a>How YouTube works</a>
        <a>Test new features</a>
      </div>
    </div>
  );
}
