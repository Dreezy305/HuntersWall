/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Layout from "../layouts";
import Card from "../components/card";
import { All } from "../data/all";
import AllAssets from "../components/allAssets";
import RealEstate from "../components/realEstate";

function Catalogue() {
  const [counter, setCounter] = useState(0);

  const catalogues = [
    <AllAssets />,
    <RealEstate />,
    <AllAssets />,
    <RealEstate />,
    <AllAssets />,
  ];

  return (
    <Layout>
      <section className="catalogue pt-4">
        <h1 className="text-center catalogue_title">Catalogue</h1>
        <div className="container">
          <div className="pt-5 pb-4 pe-lg-5 pt-5 pb-4 pe-lg-5 d-lg-flex flex-lg-row justify-content-lg-between catalogue_row d-md-flex flex-md-row justify-content-md-between">
            <h6 className="tabs" onClick={() => setCounter(0)}>
              All
            </h6>

            <h6 className="tabs" onClick={() => setCounter(1)}>
              Real estate
            </h6>

            <h6 className="tabs" onClick={() => setCounter(2)}>
              Innovation
            </h6>

            <h6 className="tabs" onClick={() => setCounter(3)}>
              Commodities
            </h6>

            <h6 className="tabs" onClick={() => setCounter(4)}>
              Diversified portfolio
            </h6>
          </div>
          <div className="d-flex flex-row pb-4 pt-3 mb-4 catalogue_filter">
            <input type="text" className="px-3 py-3" placeholder="Search" />
          </div>
        </div>
        <div className="container pb-5">
          <div className="row pb-5">{catalogues[counter]}</div>
        </div>
      </section>
    </Layout>
  );
}

export default Catalogue;
