import React from "react";

function AssetPerformance() {
  const assets = {
    buffer: "/img/buffer.svg",
  };

  return (
    <div className="assetPerform">
      <div className="d-flex flex-row justify-content-between">
        {/* CARD 1 */}
        <div className="card assetPerform_card" style={{}}>
          <div className="card-body">
            <h5 className="mb-4">Asset code: DIV-076489</h5>

            <h6 className="mt-2 mb-3">
              Asset Market: Diversified Portfolio (DIV)
            </h6>

            <div className="set mt-5 d-flex flex-row justify-content-end align-items-center">
              <div className="set_1" />
              {/* <span>DIV</span> */}
              <div className="set_1" />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card assetPerform_card2">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h6>Asset Description:</h6>
              <div className="d-flex iconBox">
                {/* <img src={assets.buffer} alt="buffer" className="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetPerformance;
