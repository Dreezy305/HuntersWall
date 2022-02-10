/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useRouter } from "next/router";
import AllAssets from "../components/allAssets";
import RealEstate from "../components/realEstate";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";

function Market() {
  const [counter, setCounter] = useState(0);

  const [mobile, setMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileBg, setMobileBg] = useState("");
  const [mobileColor, setMobileColor] = useState("#2081f9");

  // const Tabs = [
  //   { id: 1, component: <Deposit /> },
  //   { id: 2, component: <Withdrawal /> },
  // ];

  const toggle = () => {
    setMobile(!mobile);
  };

  const router = useRouter();

  const catalogues = [
    <AllAssets />,
    <RealEstate />,
    <AllAssets />,
    <RealEstate />,
    <AllAssets />,
  ];

  return (
    <>
      <div className="dashboard">
        <div className="mobile" style={{ background: mobileBg }}>
          <div className="left_text">
            <h3 className="mb-5" style={{ color: mobileColor }}>
              HuntersWall
            </h3>
          </div>
          <div className="svg">
            {!mobile ? (
              <svg
                width="32"
                height="21"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  toggle();
                  setMobileBg("#2081f9");
                  setMobileMenu(true);
                  setMobileColor("#ffffff");
                }}
              >
                <rect
                  y="0.120117"
                  width="32"
                  height="4"
                  rx="2"
                  fill="#2081F9"
                />
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
                  toggle();
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
          </div>

          {mobileMenu && (
            <>
              <ul className="list-unstyled">
                <li>Profile</li>
                <li>Wallet</li>
                <li>Loan request</li>
              </ul>
            </>
          )}
        </div>

        <div className="dashboard_left">
          <SideBar />
        </div>

        <div className="dashboard_right">
          <TopBar
            title={`Market`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="market">
            <div className="pt-5 pb-4 pe-lg-5 pt-5 pb-4 pe-lg-5 d-lg-flex flex-lg-row justify-content-lg-between catalogue_row d-md-flex flex-md-row justify-content-md-between">
              <h6 className="tabs" onClick={() => setCounter(0)}>
                All
              </h6>

              <h6 className="tabs" onClick={() => setCounter(1)}>
                Real estate
              </h6>

              <h6 className="tabs" onClick={() => setCounter(2)}>
                Innovation
              </h6>

              <h6 className="tabs" onClick={() => setCounter(3)}>
                Commodities
              </h6>

              <h6 className="tabs" onClick={() => setCounter(4)}>
                Diversified portfolio
              </h6>
            </div>

            <div className="d-flex flex-row pb-4 pt-3 mb-4 catalogue_filter">
              <input type="text" className="px-3 py-3" placeholder="Search" />
            </div>
          </div>
          <div className="container pb-5">
            <div className="row pb-5">{catalogues[counter]}</div>
          </div>
        </div>
      </div>
      {/* MMMM */}
    </>
  );
}

export default Market;
