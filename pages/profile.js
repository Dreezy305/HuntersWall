/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import PersonalInfo from "../components/personalInfo";
import BankAccountDetails from "../components/bankAccountDetails";
import dashboard from "./dashboard";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";

function Profile() {
  const [toggle, setToggle] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileBg, setMobileBg] = useState("");
  const [mobileColor, setMobileColor] = useState("#2081f9");
  const [counter, setCounter] = useState(0);

  const Tabs = [
    { id: 1, component: <PersonalInfo /> },
    { id: 2, component: <BankAccountDetails /> },
  ];

  const router = useRouter();

  const Pages = [
    {
      title: "Profile",
      // component: <Profile />,
      link: "/profile",
    },
    {
      title: "Wallet",
      //  component: <Wallet />,
      link: "/wallet",
    },
    {
      title: "Portfolio",
      //  component: <Portfolio />,
      link: "/portfolio",
    },
    {
      title: "Loan Request",
      //  component: <LoanRequest />,
      link: "/loanRequest",
    },
    {
      title: "Market",
      //  component: <Market />,
      link: "/market",
    },
    {
      title: "Transaction History",
      //  component: <TransactionHistory />,
      link: "/transaction",
    },
    {
      title: "Settings",
      //  component: <Settings />,
      link: "/settings",
    },
  ];

  const handleToggle = () => {
    console.log("toggle");
    setMobile(!mobile);
  };

  return (
    <>
      <div className="dashboard">
        <div className="mobile" style={{ background: mobileBg }}>
          <div className="left_text">
            <h3 className="mb-5" style={{ color: mobileColor }}>
              HuntersWall
            </h3>
            <div className="">
              {!mobile ? (
                <svg
                  width="32"
                  height="21"
                  viewBox="0 0 32 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    handleToggle();
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
                  <rect
                    y="8.44019"
                    width="32"
                    height="4"
                    rx="2"
                    fill="#2081F9"
                  />
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
                    handleToggle();
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
          {/* handleClick={(t) => handleClick(t)} */}
          <SideBar />
        </div>

        <div className="dashboard_right">
          <TopBar
            title={`Profile`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="profile">
            <div className="profile_top d-flex align-items-center justify-content-start">
              <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
                Personal Information
              </h6>
              <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
                Bank Account Details
              </h6>
            </div>

            <div className="mt-4">{Tabs[toggle].component}</div>
          </div>
        </div>
      </div>
      {/* <div className="profile">
        <div className="profile_top d-flex align-items-center justify-content-start">
          <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
            Personal Information
          </h6>
          <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
            Bank Account Details
          </h6>
        </div>

        <div className="mt-4">{Tabs[toggle].component}</div>
      </div> */}
    </>
  );
}

export default Profile;
