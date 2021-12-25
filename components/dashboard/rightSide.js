import React from "react";

function RightSide() {
  return (
    <div className="rightSideBar">
      <div className="d-flex flex-row justify-content-between align-items-center rightSideBar_top">
        <h1 className="ms-3">Profile</h1>
        <div className="me-3 d-flex flex-column justify-content-end align-items-end">
          <h6>User Name</h6>
          <p>ID: Hun023475</p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
