import React, { useState } from "react";

function Portfolio() {
  const [tgoggle, setToggle] = useState(0);

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

      {/* <div className="mt-4">{Tabs[tgoggle].component}</div> */}
    </div>
  );
}

export default Portfolio;
