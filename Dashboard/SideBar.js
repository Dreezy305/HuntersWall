import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>HuntersWall</h3>
        <ul className="">
          <li>Profile</li>
          <li>Wallet</li>
          <li>Portfolio</li>
          <li>Loan request</li>
          <li>Market</li>
          <li>Transaction History</li>
        </ul>
      </div>

      <div className="sidebar_bottom">
        <ul className="">
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
