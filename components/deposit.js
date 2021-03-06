/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

function Deposit() {
  const paymentsIcons = {
    creditCard: "/img/credit-card.svg",
    bankAcc: "/img/bank-account.svg",
    bankTransfer: "/img/bank.svg",
  };

  function paymentMethods({ image, alt, methodType }) {
    return (
      <div className="methodContainer my-3 d-flex flex-row justify-content-around">
        <input
          type="radio"
          id="oneTime"
          name="payment"
          className="radio"
          value={value}
        />

        <img src={image} alt={alt} className="methodContainer_Img" />

        <p className="">{methodType}</p>
      </div>
    );
  }

  paymentMethods.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    methodType: PropTypes.string,
    value: PropTypes.string,
  };

  return (
    <div className="deposit">
      <div className="card deposit_card my-4">
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
              <div className="d-lg-flex flex-lg-row justify-content-lg-between d-md-flex flex-md-row justify-content-md-between">
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
            <h6 className="mt-3">Choose a Payment Method</h6>

            <div className="methodContainer my-4 col-lg-11 m-auto px-5 d-flex flex-row justify-content-between py-3">
              <div className="d-flex">
                <input
                  type="radio"
                  id="credit-card"
                  name="credit-card"
                  className="radio me-3"
                  value="credit-card"
                />

                <img
                  src={paymentsIcons.creditCard}
                  alt="credit/card"
                  className="methodContainer_Img ms-3"
                />
              </div>

              <span className="px-3">Credit/Debit Card</span>
            </div>

            <div className="methodContainer my-4 col-lg-11 m-auto px-5 d-flex flex-row justify-content-between py-3">
              <div className="d-flex">
                <input
                  type="radio"
                  id="bank-acc"
                  name="bank-acc"
                  className="radio me-3"
                  value="bank-acc"
                />

                <img
                  src={paymentsIcons.bankAcc}
                  alt="Bank Acc"
                  className="methodContainer_Img ms-3"
                />
              </div>

              <span className="px-3">Pay with Account</span>
            </div>

            <div className="methodContainer my-4 col-lg-11 m-auto px-5 d-flex flex-row justify-content-between py-3">
              <div className="d-flex">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="bank-transfer"
                  className="radio me-3"
                  value="bank-transfer"
                />

                <img
                  src={paymentsIcons.bankTransfer}
                  alt="Bank transfer"
                  className="methodContainer_Img ms-3"
                />
              </div>

              <span className="px-3">Bank Transfer</span>
            </div>
          </div>

          <div className="m-auto deposit_btn my-3">
            <button className="px-3 py-3 mt-4">Make Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
