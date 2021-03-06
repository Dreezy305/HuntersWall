import React, { useState } from "react";
import { useRouter } from "next/router";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";
import SideBarMobile from "../Dashboard/SideBarMobile";

function LoanRequest() {
  const [mobile, setMobile] = useState(false);

  const router = useRouter();

  const toggle = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <div className="dashboard">
        <SideBarMobile />

        <div className="dashboard_left">
          <SideBar />
        </div>

        <div className="dashboard_right">
          <TopBar
            title={`Loan Request`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="loan">
            <p className="mb-3">
              <span>N.B:</span>{" "}
              <span>
                ( 80% of “cash value invested” can be requested as loan, which
                attract 1.2% monthly interest, the asset serving as collateral
                shall be transferred to the lender after 365days. Secured loan
                must be repaid before any assets used as collateral can be
                liquidated by you. )
              </span>
            </p>

            <div className="w-75 loan_container text-center">
              <h6 className="py-3">Request for loan</h6>

              {/* AMOUNT */}
              <div className="row my-4 align-items-center justify-content-center mb-3">
                <div className="text-start col-lg-8">
                  <label className="form-label loan_label  pb-2">Amount</label>
                  <br />
                  <div
                    className="p-3 loanCurrency "
                    style={{ background: "#fff" }}
                  >
                    <span className="pe-3 items ">NGN</span>{" "}
                    <span className="ps-3"></span>
                  </div>
                </div>
              </div>

              {/* COLLATERAL */}
              <div className="row my-4 align-items-center justify-content-center mb-3">
                <div className="text-start col-lg-8">
                  <label className="form-label loan_label pb-2">
                    Collateral
                  </label>
                  <br />

                  <select
                    className="loan_select w-100 px-3"
                    placeholder="Select an asset"
                  >
                    <option value="" disabled selected hidden>
                      Select asset code (active asset code)
                    </option>
                    <option value="realestate">Real Estate</option>
                    <option value="inn">Innovation</option>
                    <option value="div">Diversified Portfolio</option>
                  </select>
                </div>
              </div>

              {/* BANK NAME */}
              <div className="row my-4 align-items-center justify-content-center mb-3">
                <div className="text-start col-lg-8">
                  <label className="form-label loan_label  pb-2">
                    Bank Name
                  </label>
                  <br />

                  <input
                    className="w-100 px-3 loan_input"
                    type="text"
                    value=""
                    autoComplete="on"
                    // autoFocus
                    required
                  />
                </div>
              </div>

              {/* ACCOUNT NUMBER */}
              <div className="row my-4 align-items-center justify-content-center mb-3">
                <div className="text-start col-lg-8">
                  <label className="form-label loan_label  pb-2">
                    Account Number
                  </label>
                  <br />

                  <input
                    className="w-100 px-3 loan_input"
                    type="text"
                    value=""
                    autoComplete="on"
                    // autoFocus
                    required
                  />
                </div>
              </div>

              {/* ACCOUNT NAME */}
              <div className="row my-4 align-items-center justify-content-center mb-3">
                <div className="text-start col-lg-8">
                  <label className="form-label loan_label  pb-2">
                    Account Name
                  </label>
                  <br />

                  <input
                    className="w-100 px-3 loan_input"
                    type="text"
                    value=""
                    autoComplete="on"
                    // autoFocus
                    required
                  />
                </div>
              </div>

              {/* APPLY BUTTON */}
              <div className="row my-4 align-items-center justify-content-center mb-3">
                <div className="text-start col-lg-8 my-4">
                  <button className="loan_btn w-100 px-3 py-3">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MMMMMM */}
    </>
  );
}

export default LoanRequest;
