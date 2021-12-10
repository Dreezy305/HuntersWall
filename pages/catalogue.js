import React from "react";
import Layout from "../layouts";
import Card from "../components/card";

function Catalogue() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Layout>
      <section className="catalogue pt-4">
        <h1 className="text-center catalogue_title">Catalogue</h1>
        <div className="container">
          <div className="pt-5 pb-4 pe-lg-5 d-flex flex-row justify-content-between catalogue_row">
            <h6 className="tabs">All</h6>

            <h6 className="tabs">Real estate</h6>

            <h6 className="tabs">Innovation</h6>

            <h6 className="tabs">Commodities</h6>

            <h6 className="tabs">Diversified portfolio</h6>
          </div>
          <div className="d-flex flex-row pb-4 pt-3 mb-4 catalogue_filter">
            <input type="text" className="px-3 py-3" placeholder="Search" />
          </div>
        </div>
        <div className="container pb-5">
          <div className="row">
            {arr.map((item) => (
              <>
                <div className="col-lg-4 my-2">
                  <Card />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Catalogue;
