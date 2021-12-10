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
          <div className="d-flex flex-row pb-4 pt-3 catalogue_filter">
            <input type="text" className="px-3 py-3" placeholder="Search" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Catalogue;
