/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import PropTypes from "prop-types";
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
import Link from "next/link";
import { useAuth } from "../auth/useAuth";

function SideBar({ handleClick }) {
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);

  const auth = useAuth();

  const logOut = async () => {
    return await auth.signOut;
  };

  const handleOver = () => {
    setHover(true);
  };

  const toggle = () => {
    setMobile(!mobile);
  };

  return (
    <div className="sidebar">
      <h3 className="mb-5">HuntersWall</h3>

      <div className="sidebar_top mb-5">
        <ul className="list-unstyled">
          <Link href="/profile">
            <li
              className="d-flex align-items-center mb-3 py-1"
              onClick={() => handleClick(0)}
            >
              <ProfileIcon
                marginRight={3}
                fill="#fff"
                // onMouseOver={handleOver}
              />
              Profile
            </li>
          </Link>
          <Link href="/wallet">
            <li
              className="d-flex align-items-center mb-3 py-1"
              onClick={() => handleClick(1)}
            >
              <ShoppingIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "12px" }}
                className="icon"
              />
              Wallet
            </li>
          </Link>

          <Link href="/portfolio">
            <li
              className="d-flex align-items-center mb-3 py-1"
              onClick={() => handleClick(2)}
            >
              <WalletIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "12px" }}
              />
              Portfolio
            </li>
          </Link>
          <Link href="/loanRequest">
            <li
              className="d-flex align-items-center mb-3 py-1"
              onClick={() => handleClick(3)}
            >
              <NairaIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "16px" }}
              />
              Loan request
            </li>
          </Link>
          <Link href="/market">
            <li
              className="d-flex align-items-center mb-3 py-1"
              onClick={() => handleClick(4)}
            >
              <MarketIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "16px" }}
              />
              Market
            </li>
          </Link>
          <Link href="/transaction">
            <li
              className="d-flex align-items-center mb-3 py-1"
              onClick={() => handleClick(5)}
            >
              <TransactionIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "16px" }}
              />
              Transaction History
            </li>
          </Link>
        </ul>
      </div>

      <div className="sidebar_bottom ">
        <ul className="list-unstyled">
          <Link href="/settings">
            <li
              className="d-flex align-items-center mb-3 py-2"
              onClick={() => handleClick(6)}
            >
              <SettingIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "16px" }}
              />
              Settings
            </li>
          </Link>

          <li className="d-flex align-items-center mb-2 py-2" onClick={logOut}>
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

SideBar.defaultProps = {
  handleClick: () => {},
};

SideBar.propTypes = {
  handleClick: PropTypes.func,
};
