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

  const router = useRouter();

  const Pages = [
    {
      title: "Profile",
      component: <Profile />,
      link: "/profile",
    },
    {
      title: "Wallet",
      component: <Wallet />,
      link: "/wallet",
    },
    {
      title: "Portfolio",
      component: <Portfolio />,
      link: "/portfolio",
    },
    {
      title: "Loan Request",
      component: <LoanRequest />,
      link: "/loanRequest",
    },
    {
      title: "Market",
      component: <Market />,
      link: "/market",
    },
    {
      title: "Transaction History",
      component: <TransactionHistory />,
      link: "/transaction",
    },
    {
      title: "Settings",
      component: <Settings />,
      link: "/settings",
    },
  ];

  const handleClick = (x) => {
    if (x == 0) {
      setCounter(0);
    } else if (x == Pages.length - 1) {
      setCounter(Pages.length - 1);
    } else if (x == 1) {
      setCounter(1);
    } else if (x == 2) {
      setCounter(2);
    } else if (x == 3) {
      setCounter(3);
    } else if (x == 4) {
      setCounter(4);
    } else if (x == 5) {
      setCounter(5);
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard_left">
          <SideBar handleClick={(t) => handleClick(t)} />
        </div>

        <div className="dashboard_right">
          <TopBar title={Pages[counter].title} />
          <div className="position-sticky"></div>
          {Pages[counter].component}
        </div>
      </div>
    </>
  );
}

export default dashboard;
