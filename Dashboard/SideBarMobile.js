import React, { useState } from "react";
import Link from "next/link";
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

function SideBarMobile({ handClick }) {
  const [mobile, setMobile] = useState(false);
  const [mobileBg, setMobileBg] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileColor, setMobileColor] = useState("#2081f9");

  const handleToggle = () => {
    setMobile(!mobile);
  };

  return (
    <div
      className={`mobile ${mobile ? "mobileBg" : "mobileBgOff"}`}
      // style={{ background: mobileBg }}
    >
      <div className="left_text">
        <h3 className="mb-5" style={{ color: mobileColor }}>
          HuntersWall
        </h3>
        {/* <div className=""> */}
        {!mobile ? (
          <svg
            width="32"
            height="21"
            viewBox="0 0 32 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              handleToggle();
              setMobileBg("#2081f9");
              setMobileMenu(true);
              setMobileColor("#ffffff");
            }}
          >
            <rect y="0.120117" width="32" height="4" rx="2" fill="#2081F9" />
            <rect y="8.44019" width="32" height="4" rx="2" fill="#2081F9" />
            <rect y="16.76" width="32" height="4" rx="2" fill="#2081F9" />
          </svg>
        ) : (
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              handleToggle();
              setMobileBg("");
              setMobileMenu(false);
              setMobileColor("#2081f9");
            }}
          >
            <rect
              x="21.2131"
              y="0.211426"
              width="4"
              height="30"
              rx="2"
              transform="rotate(45 21.2131 0.211426)"
              fill="white"
            />
            <rect
              x="1.16797"
              y="2.82812"
              width="4"
              height="30"
              rx="2"
              transform="rotate(-45 1.16797 2.82812)"
              fill="white"
            />
          </svg>
        )}
        {/* </div> */}
      </div>

      {mobileMenu && (
        <div className="mobile-list">
          <ul className="list-unstyled">
            <Link href="/profile">
              <li
                className="d-flex align-items-center mb-3 py-1"
                // onClick={() => handleClick(0)}
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
                // onClick={() => handleClick(1)}
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
          <ul className="list-unstyled mt-3">
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
            <li
              className="d-flex align-items-center mb-2 py-2"
              // onClick={logOut}
            >
              <LogoutIcon
                fill="none"
                marginRight={3}
                stylesObj={{ fontSize: "16px" }}
              />
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBarMobile;
