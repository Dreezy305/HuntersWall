import React from "react";
import Layout from "../layouts";

function Catalogue() {
  return (
    <Layout>
      <section className="catalogue pt-4">
        <h1 className="text-center catalogue_title">Catalogue</h1>
        <div className="container">
          <div className="pt-5 pb-4 pe-lg-5 d-flex flex-row justify-content-between catalogue_row">
            <h6 className="tabs">All</h6>

            <h6 className="tabs">Real estate</h6>

            <h6 className="tabs">Innovaion</h6>

            <h6 className="tabs">Commodities</h6>

            <h6 className="tabs">Diversified portfolio</h6>
          </div>
          <div className="d-flex flex-row pb-4 pt-3 mb-4 catalogue_filter">
            <input type="text" className="px-3 py-3" placeholder="Search" />
          </div>
        </div>
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card px-1 py-1">
                <div className="card-body d-flex flex-column">
                  <div>
                    <button type="button" className="btn btn-primary float-end">
                      New
                    </button>
                  </div>

                  <h4 className="mt-3">Asset Code: REE-076489</h4>
                  <div>
                    <h6 className="my-3">
                      <span>Asset code</span>: DIV-076489
                    </h6>{" "}
                    <h6 className="my-3">
                      <span>Initial Offer Value (IOV)</span>: N500,000
                    </h6>{" "}
                    <h6 className="my-3">
                      <span>Asset Claiming Time</span>: 730 Days Minimum
                    </h6>{" "}
                    <h6 className="my-3">
                      <span>Asset Content: BNB: Binance Coin, SOL</span>: Solana
                      Blockchain Coin and TSLA: Tesla Incorporations.
                    </h6>{" "}
                    <h6 className="my-3">
                      <span>Subscription so far</span>: N310,000
                    </h6>{" "}
                    <h6 className="my-3">
                      <span>Offer Time left</span>: 29days; 12hours; 36mins.
                    </h6>{" "}
                    <h6 className="my-3">
                      (to acquire, click on the below button)
                    </h6>
                  </div>
                  <button type="button" className="btn btn-primary float-start">
                    New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Catalogue;
