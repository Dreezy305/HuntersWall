import React from "react";

function Withdrawal() {
  return (
    <div>
      <div className="card deposit_card my-4">
        <div className="card-body text-center">
          <h5 className="mt-2 mb-3">Withdraw</h5>

          <h6 className="mt-3 mb-5">How much do you want to withdraw</h6>

          <div className="row align-items-center">
            <div className="text-start col-lg-12 px-5">
              <div className="p-3 depositActs ">
                <span className="pe-3 items ">NGN</span>{" "}
                <span className="ps-3"></span>
              </div>
            </div>
          </div>

          <div className="m-auto deposit_btn my-3">
            <button className="px-3 py-3 mt-4">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdrawal;
