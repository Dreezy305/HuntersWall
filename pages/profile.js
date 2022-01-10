/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import PersonalInfo from "../components/personalInfo";
import BankAccountDetails from "../components/bankAccountDetails";

function Profile() {
  const [tgoggle, setToggle] = useState(0);

  const Tabs = [
    { id: 1, component: <PersonalInfo /> },
    { id: 2, component: <BankAccountDetails /> },
  ];

  return (
    <div className="profile">
      <div className="profile_top d-flex align-items-center justify-content-start">
        <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
          Personal Information
        </h6>
        <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
          Bank Account Details
        </h6>
      </div>

      <div className="mt-4">{Tabs[tgoggle].component}</div>
    </div>
  );
}

export default Profile;
