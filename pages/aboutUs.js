import React from "react";
import Layout from "../layouts";

function AboutUs() {
  const images = {
    about: "/img/aboutus.png",
  };
  return (
    <Layout>
      <section className=" aboutUs">
        <div className="text-center aboutUs_content pt-5">
          <h1 style={{ color: "#2081f9" }}>
            About Us
            {/* <span>Are you cash-strapped?</span>{" "} */}
            {/* <span className="ms-2">We got you!</span> */}
          </h1>
          {/* <p className="text-center mx-auto mt-3">
            <span>Acquired asset on this platform can be used to secure a</span>{" "}
            <span>loan with monthly interest of 1.2%.</span>{" "}
            <span>Low interest, right?</span>{" "}
            <span className="ms-1">We are after your smile</span>
          </p> */}
        </div>
        <div className="container mt-lg-3 text-center">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <img
                src={images.about}
                className="img-fluid py-lg-5"
                alt="about_us"
              />
            </div>
            <div className="col-lg-4 aboutUs_col2">
              {/* <h1 className="mb-5">About us</h1> */}
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
    </Layout>
  );
}

export default AboutUs;
