import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img
            src="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png"
            alt="drive"
          />
        </div>
        <div>Drive</div>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        <AppsIcon />
        </span>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
