import React from "react";

function TopBar({ title = "" }) {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <h4 className="">{title}</h4>
      </div>
      <div className="topbar_right">
        <h6 className="d-flex flex-column align-items-end">
          <span>firstname lastname</span>
          <span>id: number</span>
        </h6>
      </div>
    </div>
  );
}

export default TopBar;
