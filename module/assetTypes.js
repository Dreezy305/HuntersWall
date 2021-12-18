import React from "react";

function AssetTypes() {
  const assets = {
    realEstate: "/img/real-estate.svg",
    commodities: "/img/commodities.svg",
    innovation: "/img/innovation.svg",
    portfolio: "/img/diversified-portfolio.svg",
  };
  return (
    <section className="mt-5 assets">
      <div className="container">
        <div className="row text-center justify-content-sm-center assetRow">
          <div
            className="col-lg-2 assets_col assetHover"
            style={{ width: "25%" }}
          >
            <img
              src={assets.realEstate}
              className=""
              alt=""
              style={{ background: "rgba(32, 129, 249, 0.4)" }}
            />
            <h6 className="mt-1 text-center" style={{ textAlign: "end" }}>
              Real Estate
            </h6>
          </div>
          <div
            className="col-lg-2 assets_col assetHover"
            style={{ width: "25%" }}
          >
            <img
              src={assets.commodities}
              className=""
              alt=""
              style={{ background: "rgba(230, 71, 40, 0.4)" }}
            />
            <h6 className="mt-1 text-center" style={{ textAlign: "end" }}>
              Commodities
            </h6>
          </div>
          <div
            className="col-lg-2 assets_col assetHover"
            style={{ width: "25%" }}
          >
            <img
              src={assets.innovation}
              className=""
              alt=""
              style={{ background: "rgba(244, 160, 35, 0.4)" }}
            />
            <h6 className="mt-1 text-center" style={{ textAlign: "end" }}>
              Innovation
            </h6>
          </div>
          <div
            className="col-lg-2 assets_col assetHover"
            style={{ width: "25%" }}
          >
            <img
              src={assets.portfolio}
              className=""
              alt=""
              style={{ background: "rgba(114, 54, 246, 0.25)" }}
            />
            <h6 className="mt-1">Diversified Portfolio</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssetTypes;
