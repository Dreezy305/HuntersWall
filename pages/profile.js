import React from "react";
import PersonalInfo from "../components/personalInfo";

function Profile() {
  return (
    <div className="profile">
      <div className="profile_top d-flex align-items-center justify-content-start">
        <h6 className="tabs me-5">Personal Information</h6>
        <h6 className="tabs ms-5">Bank Account Details</h6>
      </div>

      <div className="mt-4">
        <PersonalInfo />
      </div>
    </div>
  );
}

export default Profile;
