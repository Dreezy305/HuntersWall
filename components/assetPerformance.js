import React from "react";
// import ApexCharts from "apexcharts";

function AssetPerformance() {
  const assets = {
    buffer: "/img/buffer.svg",
  };

  return (
    <div className="assetPerform">
      {/* ASSET PERFORMANCE */}
      <div className="d-flex flex-row justify-content-start mb-4">
        {/* CARD 1 */}
        <div className="card assetPerform_card me-4" style={{}}>
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
        <div className="card assetPerform_card2 ms-4">
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

      {/* ASSET SUMMARY */}
      <div className="assetPerform_summary mt-2">
        <h6 className="mb-3 assetSummary">Asset Summary: DIV-076489</h6>

        <div className="mt-3 d-flex flex-row justify-content-start">
          {/* set 2 */}
          <div className="card me-4 c1">
            <div className="card-body">
              <div className="d-flex flex-row justify-content-evenly">
                {/* SET 3 */}
                <div className="d-flex flex-column mt-3 me-5">
                  <div className="iconBox1 mb-3 m-auto" />
                  <div className="d-flex flex-column text-justify">
                    <ul className="list-unstyled text-center assetList mt-3">
                      <li className="my-2">N500,000</li>
                      <li className="my-2">Asset Initial Value</li>
                    </ul>
                  </div>
                </div>

                {/* SET 4 */}
                <div className="d-flex flex-column mt-3 me-5">
                  <div className="iconBox2 mb-3 m-auto" />
                  <div className="d-flex flex-column text-justify">
                    <ul className="list-unstyled text-center assetList mt-3">
                      <li className="my-2">N500,000</li>
                      <li className="my-2">Asset’s Position</li>
                    </ul>
                  </div>
                </div>

                {/* SET 5 */}
                <div className="d-flex flex-column mt-3">
                  <div className="iconBox1 mb-3 m-auto" />
                  <div className="d-flex flex-column text-justify">
                    <ul className="list-unstyled text-center assetList mt-3">
                      <li className="my-2">N500,000</li>
                      <li className="my-2">Asset Initial Value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* set 3 */}
          <div className="card ms-4 assetPerform_card3">
            <div className="card-body">
              <div className="d-flex flex-column my-3">
                <div className="assetListContainer w-75 m-auto mb-2">
                  <p className="d-flex flex-column px-3 assetListContainer_p py-2">
                    <span className="py-2">1unit (BNB),</span>{" "}
                    <span className="py-2">0.5unit (SOL),</span>{" "}
                    <span className="py-2">0.2unit (Tesla)</span>
                  </p>
                </div>

                <span className="my-3 text-center assetListContainer_span mt-3">
                  Asset Content
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="assetPerform_stat mt-4">
        <h6 className="mb-3 assetStat">Asset Summary: DIV-076489</h6>

        <div className="d-flex flex-row justify-content-between"></div>

        <div className="card w-25">
          <div className="card-body">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetPerformance;
