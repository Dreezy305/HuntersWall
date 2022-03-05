import React, { useState } from "react";
import Link from "next/link";

function SideBarMobile() {
  const [mobile, setMobile] = useState(false);
  const [mobileBg, setMobileBg] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileColor, setMobileColor] = useState("#2081f9");

  const handleToggle = () => {
    setMobile(!mobile);
  };

  return (
    <div className="mobile" style={{ background: mobileBg }}>
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
            <li>Profile</li>
            <li>Wallet</li>
            <li>Loan request</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBarMobile;
