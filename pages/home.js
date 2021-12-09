import React from "react";
import AssetTypes from "../module/assetTypes";
import AboutUs from "./aboutUs";
import Services from "./services";

function Home() {
  const images = {
    hunter: "/img/hunterswall.svg",
    undraw: "/img/undraw_wallet.png",
    hunt: "/img/hunt.png",
  };
  return (
    <>
      <section className="home p-2">
        <div className="container ">
          <div className="row align-items-stretch gx-5">
            <div className="col-lg-6 my-5">
              <h1 className="">
                <span>We have</span>
                <span className=""> fractionalized alternative assets</span>
                <span> for you.</span>
              </h1>
              <p>
                With small amount, equity stake in big assets is now possible
              </p>
              <button type="button" className="px-2 p-2">
                Create an account
              </button>
            </div>
            <div className="col-lg-6 mt-2">
              <img src={images.hunt} className="img-fluid" alt="hunterswall" />
            </div>
          </div>
        </div>
      </section>
      <AssetTypes />
      <AboutUs />
      <Services />
    </>
  );
}

export default Home;
