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
      <div className="d-flex flex-row justify-content-evenly">
        <div className="">
          <img
            src={assets.realEstate}
            className=""
            alt=""
            style={{ background: "rgba(32, 129, 249, 0.4)" }}
          />
          <h6 className="mt-1">Real Estate</h6>
        </div>
        <div className="">
          <img
            src={assets.commodities}
            className=""
            alt=""
            style={{ background: "rgba(230, 71, 40, 0.4)" }}
          />
          <h6 className="mt-1">Commodities</h6>
        </div>
        <div className="">
          <img
            src={assets.innovation}
            className=""
            alt=""
            style={{ background: "rgba(244, 160, 35, 0.4)" }}
          />
          <h6 className="mt-1">Innovation</h6>
        </div>
        <div className="">
          <img
            src={assets.portfolio}
            className=""
            alt=""
            style={{ background: "rgba(114, 54, 246, 0.25)" }}
          />
          <h6 className="mt-1">Diversified Portfolio</h6>
        </div>
      </div>
    </section>
  );
}

export default AssetTypes;
