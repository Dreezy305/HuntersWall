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
  const [mobile, setMobile] = useState(false);
  const [mobileBg, setMobileBg] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileColor, setMobileColor] = useState("#2081f9");

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

  const toggle = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <div className="dashboard">
        {/* <div className="" style={{ background: mobileBg }}> */}
        <div className="mobile" style={{ background: mobileBg }}>
          <div className="left_text">
            <h3 className="mb-5" style={{ color: mobileColor }}>
              HuntersWall
            </h3>
          </div>
          <div className="svg">
            {!mobile ? (
              <svg
                width="32"
                height="21"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  toggle();
                  setMobileBg("#2081f9");
                  setMobileMenu(true);
                  setMobileColor("#ffffff");
                }}
              >
                <rect
                  y="0.120117"
                  width="32"
                  height="4"
                  rx="2"
                  fill="#2081F9"
                />
                <rect y="8.44019" width="32" height="4" rx="2" fill="#2081F9" />
                <rect y="16.76" width="32" height="4" rx="2" fill="#2081F9" />
              </svg>
            ) : (
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  toggle();
                  setMobileBg("");
                  setMobileMenu(false);
                  setMobileColor("#2081f9");
                }}
              >
                <rect
                  x="21.2131"
                  y="0.211426"
                  width="4"
                  height="30"
                  rx="2"
                  transform="rotate(45 21.2131 0.211426)"
                  fill="white"
                />
                <rect
                  x="1.16797"
                  y="2.82812"
                  width="4"
                  height="30"
                  rx="2"
                  transform="rotate(-45 1.16797 2.82812)"
                  fill="white"
                />
              </svg>
            )}
          </div>

          {mobileMenu && (
            <>
              <ul className="list-unstyled">
                <li>Profile</li>
                <li>Wallet</li>
                <li>Loan request</li>
              </ul>
            </>
          )}
        </div>

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
