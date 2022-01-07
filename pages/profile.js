/* eslint-disable react/jsx-key */
import React from "react";
import PersonalInfo from "../components/personalInfo";
import BankAccountDetails from "../components/bankAccountDetails";
import { useState } from "react/cjs/react.development";
import { Tab } from "bootstrap";

function Profile() {
  const [tab, setTab] = useState(0);

  const Tabs = [
    { id: 1, component: <PersonalInfo /> },
    { id: 2, component: <BankAccountDetails /> },
  ];

  return (
    <div className="profile">
      <div className="profile_top d-flex align-items-center justify-content-start">
        <h6 className="tabs me-5">Personal Information</h6>
        <h6 className="tabs ms-5">Bank Account Details</h6>
      </div>

      <div className="mt-4">{Tabs[tab].component}</div>
    </div>
  );
}

export default Profile;
