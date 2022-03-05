/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useRouter } from "next/router";
import AllAssets from "../components/allAssets";
import RealEstate from "../components/realEstate";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import SideBarMobile from "../Dashboard/SideBarMobile";

function Market() {
  const [counter, setCounter] = useState(0);
  const [mobile, setMobile] = useState(false);

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
        <SideBarMobile />

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
