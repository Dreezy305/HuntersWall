import React from "react";
import Layout from "../layouts";

function Catalogue() {
  return (
    <Layout>
      <section className="catalogue pt-4">
        <h1 className="text-center catalogue_title">Catalogue</h1>

        <div className=" pt-5 pb-4 d-flex flex-row justify-content-evenly catalogue_row">
          <h6 className="tabs">All</h6>

          <h6 className="tabs">Real estate</h6>

          <h6 className="tabs">Innovaion</h6>

          <h6 className="tabs">Commodities</h6>

          <h6 className="tabs" style={{ whiteSpace: "nowrap" }}>
            Diversified portfolio
          </h6>
        </div>
      </section>
    </Layout>
  );
}

export default Catalogue;
