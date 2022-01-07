import React from "react";

function PersonalInfo() {
  return (
    <div className="profile_personalInfo">
      <div className="profile_personalInfo-wrapper">
        {/* last and first name */}
        <div className="d-flex flex-row align-items-center profile_personalInfo-names">
          <div className="text-start me-4">
            <label className="form-label pb-2">First Name</label>
            <br />
            <div className="p-3 profileNames">
              <p>Ifeoluwa</p>
            </div>
          </div>
          <div className="text-start ms-4">
            <label className="form-label pb-2">Last Name</label>
            <br />
            <div className="p-3 profileNames">
              <p>Olagbeni</p>
            </div>
          </div>
        </div>

        {/* ID */}
        <div className="text-start">
          <label className="form-label pb-2">User ID</label>
          <br />
          <div className="p-3 profileId">
            <p>Hun023475</p>
          </div>
        </div>

        {/* gender && birthday */}
        <div className="d-flex flex-row align-items-center profile_personalInfo-names">
          <div className="text-start me-4">
            <label className="form-label pb-2">Gender</label>
            <br />
            <div className="p-3 profileNames">
              <p>Ifeoluwa</p>
            </div>
          </div>
          <div className="text-start ms-4">
            <label className="form-label pb-2">Birthday</label>
            <br />
            <div className="p-3 profileNames">
              <p>Olagbeni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
