/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import Profile from "./profile";

function dashboard() {
  const [counter, setCounter] = useState(0);

  const Titles = [
    "Profile",
    "Wallet",
    "Portfolio",
    "Loan request",
    "Market",
    "Transaction History",
    "Settings",
    "Log Out",
  ];

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_left">
          <SideBar />
        </div>

        <div className="dashboard_right">
          <TopBar title={Titles[counter]} />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default dashboard;
