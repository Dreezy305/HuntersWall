/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { useState } from "react";
import Layout from "../layouts";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const image = {
    img: "/img/createacc.png",
  };

  const logInData = {
    email,
    password,
  };

  const handleSubmit = async (logInData) => {
    return await signIn(logInData).then((user) => {});
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
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3 py-3"
                    autoComplete="on"
                    autoFocus
                    required
                  />
                </div>

                <div className="col-md-12 col-sm-6 text-start position-relative pass-wrapper">
                  <label className="form-label pb-2">Password</label>
                  <br />
                  <input
                    type={passwordShown ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-3 py-3"
                    autoComplete="on"
                    required
                  />
                  {!eyeOpen ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="position-absolute svg"
                        style={{ top: "53px", right: "60px" }}
                        onClick={() => {
                          setEyeOpen(!eyeOpen);
                          togglePasswordVisiblity();
                        }}
                        strokeWidth="1.5"
                        stroke="black"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-eye-off"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="position-absolute svg"
                        style={{ top: "53px", right: "60px" }}
                        onClick={() => {
                          setEyeOpen(!eyeOpen);
                          togglePasswordVisiblity();
                        }}
                        strokeWidth="1.5"
                        stroke="black"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="3" y1="3" x2="21" y2="21" />
                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                      </svg>
                    </>
                  )}
                </div>

                <div className="col-md-12 col-sm-6 py-1 text-center">
                  <button
                    type="button"
                    className="px-3 py-3"
                    onClick={() => handleSubmit()}
                  >
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
