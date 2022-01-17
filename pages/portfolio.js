import React, { useState } from "react";
import CashValue from "../components/cashValue";
import AssetPerformance from "../components/assetPerformance";

function Portfolio() {
  const [toggle, setToggle] = useState(0);

  const Tabs = [
    { id: 1, component: <CashValue />, bg: "#fff" },
    { id: 2, component: <AssetPerformance />, bg: "#f1f7ff" },
  ];

  return (
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
  );
}

export default Portfolio;
