import React, { useState } from "react";
import CashValue from "../components/cashValue";
import AssetPerformance from "../components/assetPerformance";

function Portfolio() {
  const [tgoggle, setToggle] = useState(0);

  const Tabs = [
    { id: 1, component: <CashValue /> },
    { id: 2, component: <AssetPerformance /> },
  ];

  return (
    <div className="portfolio">
      <div className="portfolio_top d-flex align-items-center justify-content-start">
        <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
          Cash value invested
        </h6>
        <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
          Asset Performance
        </h6>
      </div>

      <div className="mt-4">{Tabs[tgoggle].component}</div>
    </div>
  );
}

export default Portfolio;
