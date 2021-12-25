/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function LeftSide() {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div className="leftSideBar">
      <h1 className="mb-4 ps-3">HuntersWall</h1>
      <div className="leftSideBar_menu my-3 pt-3">
        <ul className="list-unstyled">
          <li className="ps-3 my-4">
            <img src="/img/user.svg" className="mb-1 me-3" alt="profile" />{" "}
            Profile
          </li>
          <li className="ps-3 my-4">
            <img
              src="/img/shopping-bag.svg"
              className="mb-1 me-3"
              alt="wallet"
            />{" "}
            Wallet
          </li>
          <li className="ps-3 my-4">
            <img
              src="/img/credit-card.svg"
              className="mb-1 me-3"
              alt="portfolio"
            />{" "}
            Portfolio
          </li>
          <li className="ps-3 my-4">
            <img
              src="/img/naira.svg"
              className="mb-1 me-2"
              alt="loan_request"
            />{" "}
            Loan request
          </li>
          <li className="ps-3 my-4">
            <img src="/img/market.svg" className="mb-1 me-3" alt="market" />{" "}
            Market
          </li>
          <li className="ps-3">
            <img
              src="/img/vector.svg"
              className="mb-1 me-3"
              alt="transction_history"
            />{" "}
            Transaction History
          </li>
        </ul>
      </div>
      <div className="leftSideBar_submenu my-4 pt-4">
        <ul className="list-unstyled">
          <li className="ps-3 my-4">
            <img src="/img/settings.svg" className="mb-1 me-3" alt="profile" />{" "}
            Settings
          </li>
          <li className="ps-3 my-3">
            <img src="/img/log-out.svg" className="mb-1 me-3" alt="wallet" />{" "}
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSide;
