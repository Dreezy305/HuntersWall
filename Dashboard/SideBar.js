import React, { useState } from "react";
import {
  LogoutIcon,
  MarketIcon,
  NairaIcon,
  ProfileIcon,
  SettingIcon,
  ShoppingIcon,
  TransactionIcon,
  WalletIcon,
} from "../components/icon";
// import WalletIcon from "../components/walletIcon";

function SideBar() {
  const [hover, setHover] = useState(false);

  const handleOver = () => {
    setHover(true);
  };

  return (
    <div className="sidebar">
      <h3 className="mb-5">HuntersWall</h3>
      <div className="sidebar_top mb-5">
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-3 py-1">
            <ProfileIcon
              marginRight={3}
              fill="#fff"
              // onMouseOver={handleOver}
            />
            Profile
          </li>
          <li className="d-flex align-items-center mb-3 py-1">
            <ShoppingIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
              className="icon"
            />
            Wallet
          </li>
          <li className="d-flex align-items-center mb-3 py-1">
            <WalletIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Portfolio
          </li>
          <li className="d-flex align-items-center mb-3 py-1">
            <NairaIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Loan request
          </li>
          <li className="d-flex align-items-center mb-3 py-1">
            <MarketIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Market
          </li>
          <li className="d-flex align-items-center mb-3 py-1">
            <TransactionIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Transaction History
          </li>
        </ul>
      </div>

      <div className="sidebar_bottom ">
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-3 py-2">
            <SettingIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Settings
          </li>
          <li className="d-flex align-items-center mb-2 py-2">
            <LogoutIcon
              fill="none"
              marginRight={3}
              stylesObj={{ fontSize: "16px" }}
            />
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
