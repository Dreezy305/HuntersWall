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

      <div className="row align-items-center mb-3">
        <div className="text-start col-lg-6">
          <label className="form-label pb-2">Amount</label>
          <br />
          <div className="p-3 profileNames">
            <p>Hun023475</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanRequest;
