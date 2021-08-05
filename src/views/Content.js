import React from "react";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
import "./Content.css";
import SideMenu from "./SideMenu";

export default function Content() {
  return (
    <div className="content">
      <div className="content__left">
        <SideMenu />
      </div>
      <div className="content__feed">
        <Feed />
      </div>
      <div className="content__right">
        <RightSidebar />
      </div>
    </div>
  );
}
