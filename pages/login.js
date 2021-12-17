/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { useState } from "react";
import Layout from "../layouts";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
              <h2>Welcome Back</h2>

              <form
                className="row g-4 py-5 createAcc_form"
                onSubmit={() => e.preventDefault()}
              >
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Email</label>
                  <br />
                  <input type="text" className="px-3 py-3" required />
                </div>

                <div className="col-md-12 col-sm-6 text-start position-relative pass-wrapper">
                  <label className="form-label pb-2">Password</label>
                  <br />
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="px-3 py-3"
                    required
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="position-absolute svg"
                    onClick={() => togglePasswordVisiblity()}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                      stroke="black"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="black"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="col-md-12 col-sm-6 py-1 text-center">
                  <button type="button" className="px-3 py-3">
                    Login
                  </button>
                </div>
                <div className="col-md-12 col-sm-6 text-start createAcc_terms d-flex flex-row align-items-baseline justify-content-between py-2">
                  <p className="text-center mx-auto">
                    <span>Not yet registered?</span>
                    <span>
                      <a
                        href="/createAcc"
                        as={Link}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        create an account
                      </a>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
