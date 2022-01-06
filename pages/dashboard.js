import React from "react";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";

function dashboard() {
  return (
    <>
      <TopBar />
      <div className="dashboardContainer">
        <SideBar />
      </div>
    </>
  );
}

export default dashboard;
