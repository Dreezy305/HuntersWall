import React, { useState } from "react";
import { useRouter } from "next/router";
import Deposit from "../components/deposit";
import Withdrawal from "../components/withdrawal";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import SideBarMobile from "../Dashboard/SideBarMobile";

function Wallet() {
  const [tgoggle, setToggle] = useState(0);
  const [mobile, setMobile] = useState(false);

  const Tabs = [
    { id: 1, component: <Deposit /> },
    { id: 2, component: <Withdrawal /> },
  ];

  const handleToggle = () => {
    setMobile(!mobile);
  };

  const router = useRouter();

  return (
    <>
      <div className="dashboard">
        <SideBarMobile />

        <div className="dashboard_left">
          <SideBar />
        </div>

        <div className="dashboard_right">
          <TopBar
            title={`Wallet`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="wallet">
            <div className="mt-3">
              <div className="card wallet_card" style={{}}>
                <div className="card-body">
                  <h6>Net Worth</h6>
                  <hr />
                  <h6>N105,000.00</h6>
                  <hr />
                  <h6>Cash balance available</h6>
                </div>
              </div>
            </div>

            <div className="wallet_activity d-flex flex-row align-items-center justify-content-start mt-5">
              <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
                Deposit
              </h6>
              <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
                Withdraw
              </h6>
            </div>

            <div className="mt-4">{Tabs[tgoggle].component}</div>
          </div>
        </div>
      </div>
      {/* MMMM */}
    </>
  );
}

export default Wallet;
