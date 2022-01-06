import React from "react";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import Profile from "./profile";

function dashboard() {
  return (
    <>
      <TopBar />
      <div className="dashboard">
        <SideBar />
        <Profile />
      </div>
    </>
  );
}

export default dashboard;
