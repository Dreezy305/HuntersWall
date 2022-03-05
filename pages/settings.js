import React, { useState } from "react";
import { useRouter } from "next/router";
import PersonalSettings from "../components/personalSettings";
import BankAccSettings from "../components/bankAccSettings";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import SideBarMobile from "../Dashboard/SideBarMobile";

function Settings() {
  const [toggle, setToggle] = useState(0);

  const Tabs = [
    { id: 1, component: <PersonalSettings /> },
    { id: 2, component: <BankAccSettings /> },
  ];

  // const toggle = () => {
  //   setMobile(!mobile);
  // };

  const router = useRouter();

  return (
    <>
      <div className="dashboard">
        <SideBarMobile />

        <div className="dashboard_left">
          <SideBar />
        </div>

        <div className="dashboard_right">
          <TopBar
            title={`Settings`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="settings">
            <div className="settings_top d-flex align-items-center justify-content-start">
              <h6
                className="tabs me-5 h6 active y"
                onClick={() => setToggle(0)}
              >
                Personal Settings
              </h6>
              <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
                Bank Account Settings
              </h6>
            </div>

            <div className="mt-4">{Tabs[toggle].component}</div>
          </div>
        </div>
      </div>
      {/* MMMM */}
    </>
  );
}

export default Settings;
