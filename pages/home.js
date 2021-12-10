import React from "react";
import AssetTypes from "../module/assetTypes";
import AboutUs from "./aboutUs";
import Services from "./services";
import { serviceData } from "../data/services";

function Home() {
  const image = {
    about: "/img/aboutus.png",
  };

  const images = {
    hunter: "/img/hunterswall.svg",
    undraw: "/img/undraw_wallet.png",
    hunt: "/img/hunt.png",
  };

  const serviceTypes = {
    housing: "/img/housing.png",
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

      {/* ABOUT US SECTION */}
      <section className="mt-5 pt-5 aboutUs">
        <div className="text-center aboutUs_content">
          <h1>
            <span>Are you cash-strapped?</span>{" "}
            <span className="ms-2">We got you!</span>
          </h1>
          <p className="text-center mx-auto mt-3">
            <span>Acquired asset on this platform can be used to secure a</span>{" "}
            <span>loan with monthly interest of 1.2%.</span>{" "}
            <span>Low interest, right?</span>{" "}
            <span className="ms-1">We are after your smile</span>
          </p>
        </div>
        <div className="container mt-lg-3 text-center">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <img
                src={image.about}
                className="img-fluid py-lg-5"
                alt="about_us"
              />
            </div>
            <div className="col-lg-4 aboutUs_col2">
              <h1 className="mb-5">About us</h1>
              <h6 className="mb-4">
                We are a team of stategists, researchers and analysts that held
                strong positions from various fileds such as real estate,
                manufacturing, technology, and finance. We build and maintain
                relationships which are based on trust, strategic ideas,
                results, and exceptional deliveries.
              </h6>
              <div className="">
                <button className="text-light px-4 py-3 float-end">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT US SECTION */}

      {/* SERVICE SECTION */}
      <section className="services pt-5">
        <h1 className="text-center mb-5 mt-4">Services</h1>
        <div className="container pb-5 services_container">
          <div className="row pb-5">
            {serviceData.map((item) => (
              <>
                <div className={`col-lg-6 pt-4 ${item.space}`}>
                  <div className={`card px-3 services_card hoverEffect`}>
                    <img
                      src={item.image}
                      className="card-img-top py-3"
                      alt={item.title}
                    />
                    <div className="card-body px-1">
                      <h5 className="card-title text-center mb-2">
                        {item.title}
                      </h5>
                      <p className="card-text">{item.content}</p>
                      <button className="px-3 py-2 float-end">Read more</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* END SERVICE SECTION */}
    </>
  );
}

export default Home;
