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
import SideBarMobile from "../Dashboard/SideBarMobile";

function Profile() {
  const [toggle, setToggle] = useState(0);
  const [mobile, setMobile] = useState(false);

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
        <SideBarMobile />
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
