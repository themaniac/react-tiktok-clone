import React from "react";
import {
  IconButton,
  Typography
} from "@material-ui/core";

import "./Header.css"
import TikTokLogo from "./logo.png"
import PublishIcon from '@material-ui/icons/Publish';

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton
          edge="start"
          className="header__menuicon"
          color="inherit"
          aria-label="menu"
        >
          <img alt="logo" src={TikTokLogo} className="header__logo"/>
        </IconButton>
        <Typography variant="h6" className="header__title">
          Title
        </Typography>
      </div>
      <div className="header__right">
        <PublishIcon />
      </div>
    </div>
  );
}
