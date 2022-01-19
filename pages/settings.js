import React, { useState } from "react";
import PersonalSettings from "../components/personalSettings";
import BankAccSettings from "../components/bankAccSettings";

function Settings() {
  const [toggle, setToggle] = useState(0);

  const Tabs = [
    { id: 1, component: <PersonalSettings /> },
    { id: 2, component: <BankAccSettings /> },
  ];

  return (
    <div className="settings">
      <div className="settings_top d-flex align-items-center justify-content-start">
        <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
          Personal Settings
        </h6>
        <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
          Bank Account Settings
        </h6>
      </div>

      <div className="mt-4">{Tabs[toggle].component}</div>
    </div>
  );
}

export default Settings;
