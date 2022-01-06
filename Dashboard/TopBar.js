import React from "react";

function TopBar({ title = "" }) {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <h4 className="">{title}</h4>
      </div>
      <div className="topbar_right">
        <h6>firstname lastname</h6>
        <p>id: number</p>
      </div>
    </div>
  );
}

export default TopBar;
