/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import Profile from "./profile";
import Wallet from "./wallet";

function dashboard() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

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

  const Pages = [<Profile />, <Wallet />];

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_left">
          <SideBar onClick={() => setCounter(counter + 1)} />
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
