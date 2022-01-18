import React from "react";

function LoanRequest() {
  return (
    <div className="loan">
      <p className="">
        <span>N.B:</span>{" "}
        <span>
          ( 80% of “cash value invested” can be requested as loan, which attract
          1.2% monthly interest, the asset serving as collateral shall be
          transferred to the lender after 365days. Secured loan must be repaid
          before any assets used as collateral can be liquidated by you. )
        </span>
      </p>

      <div className="container text-center">
        <h6 className="mb-3">Request for loan</h6>
        <div className="row align-items-center justify-content-center mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Amount</label>
            <br />
            <div className="p-3 loanCurrency ">
              <span className="pe-3 items ">NGN</span>{" "}
              <span className="ps-3"></span>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Amount</label>
            <br />
            <div className="p-3 loanCurrency ">
              <span className="pe-3 items ">NGN</span>{" "}
              <span className="ps-3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanRequest;
