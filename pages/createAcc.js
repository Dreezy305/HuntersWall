/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import Layout from "../layouts";
import { auth } from "../auth/config/firebase.config";

function CreateAcc() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(null);
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirm = () => {
    setConfirm(confirm ? false : true);
  };

  const image = {
    img: "/img/createacc.png",
  };

  const signUpData = {
    email,
    password,
  };

  const signUp = async ({ name, email, password }) => {
    try {
      const response = auth.createUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleSubmit = () => {};

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
                  <input
                    type="text"
                    className="px-3 py-3"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Last Name</label>
                  <br />
                  <input
                    type="text"
                    className="px-3 py-3"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Email</label>
                  <br />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3 py-3"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="col-md-12 col-sm-6 text-start">
                  <label className="form-label pb-2">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    className="px-3 py-3"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="col-md-12 col-sm-6 text-start position-relative">
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

                <div className="col-md-12 col-sm-6 text-start position-relative">
                  <label className="form-label pb-2">Confirm Password</label>
                  <br />
                  <input
                    type={confirm ? "text" : "password"}
                    className="px-3 py-3"
                    autoComplete="on"
                    required
                  />
                  {!open ? (
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
                          setOpen(!open);
                          toggleConfirm();
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
                          setOpen(!open);
                          toggleConfirm();
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
                <div className="col-md-12 col-sm-6 text-start createAcc_terms d-flex flex-row align-items-baseline justify-content-between py-2">
                  <input type="checkbox" className="" required />
                  <p>
                    <span>
                      By creating an account I have read and agreed to
                    </span>
                    <span style={{ cursor: "pointer" }}>
                      Terms and Conditions
                    </span>
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
