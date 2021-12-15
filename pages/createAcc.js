import React, { useState } from "react";
import Layout from "../layouts";

function CreateAcc() {
  const image = {
    img: "/img/createacc.png",
  };
  return (
    <Layout>
      <section className="createAcc">
        <div className="container ">
          <div className="row gx-lg-5">
            <div className="col-lg-6 pt-5 px-lg-5 py-5 createAcc_rightCol">
              <img
                src={image.img}
                alt="create_account_illustration"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 pt-5 text-center createAcc_leftCol">
              <h2>Create an account</h2>
              <p className="mb-4">
                We have fractionalized alternative assets for you.
              </p>
              <form className="row g-4 py-5 createAcc_form">
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">First Name</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Last Name</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Email</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Phone Number</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Password</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Confirm Password</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>
                <div className="col-md-12 col-sm-6 text-start createAcc_terms d-flex flex-row align-items-baseline justify-content-between py-2">
                  <input type="checkbox" className="" required />
                  <p>
                    <span>
                      By creating an account I have read and agreed to
                    </span>
                    <span>Terms and Conditions</span>
                  </p>
                </div>
                <div className="col-md-12 col-sm-6 py-1 text-center">
                  <button type="button" className="px-3 py-3">
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CreateAcc;
