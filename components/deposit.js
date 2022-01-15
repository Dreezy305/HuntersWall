import React from "react";

function Deposit() {
  const paymentMethods = ({ value = "" }) => {
    return (
      <div className="methodContainer my-3 d-flex flex-row justify-content-around">
        <input
          type="radio"
          id="oneTime"
          name="payment"
          className="radio"
          value={value}
        />
      </div>
    );
  };
  return (
    <div className="deposit">
      <div className="card deposit_card">
        <div className="card-body text-center">
          <h5 className="mt-2 mb-3">Deposit</h5>
          <h6 className="mt-3 mb-5">How much do you want to deposit</h6>

          <div className="row align-items-center">
            <div className="text-start col-lg-12 px-5">
              <div className="p-3 depositActs ">
                <span className="pe-3 items ">NGN</span>{" "}
                <span className="ps-3"></span>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="text-start col-lg-12 px-5">
              <div className="d-lg-flex flex-lg-row justify-content-lg-between">
                <label>
                  <input
                    type="radio"
                    id="oneTime"
                    name="payment"
                    className="radio"
                    value="oneTime"
                  />
                  <span className="ms-2 align-top">One Time</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="recurring"
                    name="payment"
                    className="radio"
                    value="recurring"
                  />
                  <span className="ms-2 align-top">Recurring</span>
                </label>
              </div>
            </div>
          </div>

          <div className="deposit_paymentMethod mt-4">
            <h6 className="">Choose a Payment Method</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
