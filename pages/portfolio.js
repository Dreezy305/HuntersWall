import React, { useState } from "react";
import { useRouter } from "next/router";
import CashValue from "../components/cashValue";
import AssetPerformance from "../components/assetPerformance";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import SideBarMobile from "../Dashboard/SideBarMobile";

function Portfolio() {
  const [toggle, setToggle] = useState(0);

  const Tabs = [
    { id: 1, component: <CashValue />, bg: "#fff" },
    { id: 2, component: <AssetPerformance />, bg: "#f1f7ff" },
  ];

  // const toggle = () => {
  //   setMobile(!mobile);
  // };

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
            title={`Portfolio`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="portfolio" style={{}}>
            <div className="portfolio_top d-flex align-items-center justify-content-start">
              <h6
                className="tabs me-5 mb-2 h6"
                onClick={() => setToggle(0)}
                tabIndex="1"
              >
                Cash value invested
              </h6>
              <h6
                className="tabs ms-5 mb-2 h6"
                onClick={() => setToggle(1)}
                tabIndex="1"
              >
                Asset Performance
              </h6>
            </div>

            <div className="mt-4">{Tabs[toggle].component}</div>
          </div>
        </div>
      </div>

      {/* MMM */}
    </>
  );
}

export default Portfolio;
