/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import Profile from "./profile";
import Wallet from "./wallet";
import Portfolio from "./portfolio";
import LoanRequest from "./loanRequest";
import Market from "./market";
import TransactionHistory from "./transaction";
import Settings from "./settings";

function dashboard() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("Profile");

  const router = useRouter();

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

  const Pages = [
    {
      title: "Profile",
      component: <Profile />,
      link: "/profile",
    },
    {
      title: "Profile",
      component: <Wallet />,
      link: "/profile",
    },
    {
      title: "Profile",
      component: <Portfolio />,
      link: "/profile",
    },
    {
      title: "Profile",
      component: <LoanRequest />,
      link: "/profile",
    },
    {
      title: "Profile",
      component: <Market />,
      link: "/profile",
    },
    {
      title: "Profile",
      component: <TransactionHistory />,
      link: "/profile",
    },
    {
      title: "Profile",
      component: <Settings />,
      link: "/profile",
    },
  ];

  // const Pages = [<Profile />, <Wallet />];

  const handleClick = (x) => {
    if (x == 0) {
      setCounter(0);
    } else if (x == Titles.length - 1) {
      setCounter(Titles.length - 1);
    }
  };

  // else if (x >= 1 && x < Titles.length - 1) {
  // setCounter(counter + 1);
  // }

  console.log(Titles.length - 1);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_left">
          <SideBar handleClick={(t) => handleClick(t)} />
        </div>

        <div className="dashboard_right">
          <TopBar title={Titles[counter]} />
          {Pages[counter].component}
        </div>
      </div>
    </>
  );
}

export default dashboard;
