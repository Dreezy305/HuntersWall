import React from "react";
import { ProfileIcon, WalletIcon } from "../components/icon";
// import WalletIcon from "../components/walletIcon";

function SideBar() {
  return (
    <div className="sidebar">
      <h3 className="mb-5">HuntersWall</h3>
      <div className="sidebar_top">
        <ul className="">
          <li className="d-flex align-items-center mb-3">
            <ProfileIcon marginRight={3} fill="#fff" />
            Profile
          </li>
          <li className="d-flex align-items-center mb-3">
            <WalletIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Wallet
          </li>
          <li className="d-flex align-items-center mb-3">Portfolio</li>
          <li className="d-flex align-items-center mb-3">Loan request</li>
          <li className="d-flex align-items-center mb-3">Market</li>
          <li className="d-flex align-items-center mb-3">
            Transaction History
          </li>
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
