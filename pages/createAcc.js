/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../layouts";
import { useAuth } from "../auth/useAuth";
import toast, { Toaster } from "react-hot-toast";
// import { useValidation } from "../hooks/validation";

function CreateAcc() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(null);
  const [open, setOpen] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [terms, setTerms] = useState(false);
  const [first, setCheckFirst] = useState(false);
  const [last, setCheckLast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const auth = useAuth();

  const router = useRouter();

  const notify = (message) => toast(message);

  const userObj = {
    firstName: "Ifeoluwa",
    lastName: "Olagbemi",
    userId: "Hun023475",
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirm = () => {
    setConfirm(confirm ? false : true);
  };

  const image = {
    img: "/img/createacc.png",
    success: "/img/check.svg",
  };

  const validateEmail = (m) => {
    const EmailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!EmailRegexp.test(m)) {
      // console.log(!EmailRegexp.test(m));
      setLoading(false);
      return setIsEmailValid(true);
    } else {
      return setIsEmailValid(false);
    }
  };

  const validatePassword = (p) => {
    const PasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!PasswordRegexp.test(p)) {
      // console.log(!PasswordRegexp.test(p));
      setLoading(false);
      return setIsPasswordValid(true);
    } else {
      return setIsPasswordValid(false);
    }
  };

  const matchPass = (pass, confirmPass) => {
    if (pass !== confirmPass) {
      setCheckPass(true);
      setLoading(false);
    } else {
      setCheckPass(false);
    }
  };

  const checkTermsAndCondition = (c) => {
    if (c == false) {
      setTerms(true);
      setLoading(false);
    } else {
      setTerms(false);
    }
  };

  const FirstandLast = (f, l) => {
    if (f == "") {
      setCheckFirst(true);
      setLoading(false);
    } else {
      setCheckFirst(false);
    }

    if (l == "") {
      setCheckLast(true);
      setLoading(false);
    } else {
      setCheckLast(false);
    }
  };

  const signUpData = {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    Terms_and_Condition: checkBox,
  };

  const handleSubmit = async () => {
    setLoading(true);

    FirstandLast(signUpData.firstName, signUpData.lastName);

    validateEmail(signUpData.email);

    validatePassword(signUpData.password);

    matchPass(signUpData.password, signUpData.confirmPassword);

    checkTermsAndCondition(signUpData.Terms_and_Condition);

    return await auth.signUp(signUpData).then((response) => {
      if (!response.error) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setConfirmPassword("");
        setCheckBox(false);
        setLoading(false);
        return [
          response,
          router.push({ pathname: "/profile", query: userObj }),
          toast.success("account created successfully"),
          setToast(true),
        ];
      }
    });
  };

  const handleClose = () => {
    setToast(false);
  };

  return (
    <>
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
                <form
                  className="row g-4 py-5 createAcc_form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="col-md-12 col-sm-6 text-start">
                    <label className="form-label pb-2">First Name</label>
                    <br />
                    <input
                      type="text"
                      className="px-3 py-3"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="on"
                      // autoFocus
                      required
                    />
                    {first && (
                      <p className="error-text text-danger my-2 fst-italic fs-6">
                        Please enter your first name
                      </p>
                    )}
                  </div>
                  <div className="col-md-12 col-sm-6 text-start">
                    <label className="form-label pb-2">Last Name</label>
                    <br />
                    <input
                      type="text"
                      className="px-3 py-3"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="on"
                      // autoFocus
                      required
                    />
                    {last && (
                      <p className="error-text text-danger my-2 fst-italic fs-6">
                        Please enter your last name
                      </p>
                    )}
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
                      // autoFocus
                      required
                    />
                    {isEmailValid && (
                      <p className="error-text text-danger my-2 fst-italic fs-6">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>
                  <div className="col-md-12 col-sm-6 text-start">
                    <label className="form-label pb-2">Phone Number</label>
                    <br />
                    <input
                      type="text"
                      className="px-3 py-3"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      autoComplete="on"
                      // autoFocus
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
                      // autoFocus
                      required
                    />
                    {isPasswordValid && (
                      <p className="error-text text-danger my-2 fst-italic fs-6">
                        Min 8 characters, at least 1 uppercase letter, 1
                        lowercase letter and 1 number
                      </p>
                    )}
                    {!eyeOpen ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-eye position-absolute svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
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
                          className="icon icon-tabler icon-tabler-eye-off position-absolute svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      autoComplete="on"
                      // autoFocus
                      required
                    />
                    {checkPass && (
                      <p className="error-text text-danger my-2 fst-italic fs-6">
                        Passwords do not match
                      </p>
                    )}
                    {!open ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-eye position-absolute svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
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
                          className="icon icon-tabler icon-tabler-eye-off position-absolute svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
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
                  <div className="py-2">
                    <div className="col-md-12 col-sm-6 text-start createAcc_terms d-flex flex-row align-items-baseline justify-content-between pb-1 ">
                      <input
                        type="checkbox"
                        value="terms"
                        onClick={() => setCheckBox(!checkBox)}
                        className=""
                        required
                        style={{ cursor: "pointer" }}
                      />
                      <p>
                        <span>
                          By creating an account I have read and agreed to
                        </span>
                        <span style={{ cursor: "pointer" }}>
                          <Link href="/terms">
                            <a style={{ textDecoration: "none" }}>
                              Terms and Conditions{" "}
                            </a>
                          </Link>
                        </span>
                      </p>
                    </div>
                    {terms && (
                      <p className="error-text text-danger fst-italic fs-6 pt-1">
                        kindly read the Terms and Conditions
                      </p>
                    )}
                  </div>

                  <div className="col-md-12 col-sm-6 py-1 text-center">
                    <button
                      type="button"
                      className="px-3 py-3"
                      onClick={() => handleSubmit()}
                      // onClick={() => setToast(true)}
                    >
                      {loading ? "Creating acount..." : "Create account"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default CreateAcc;
