import React from "react";
import PropTypes from "prop-types";

const Card = ({
  AssetCode = "REE-076489",
  assetCode = "DIV-076489",
  Iov = "N500,000",
  AssetClaimTime = "730 Days Minimum",
  subscriptions = "N310,000",
  offertime = "29days; 12hours; 36mins",
  AssetContent = `Solana
            Blockchain Coin and TSLA: Tesla Incorporations.`,
}) => {
  return (
    <div className="card px-1 py-1">
      <div className={`card-body d-flex flex-column cardBody}`}>
        <div className="cardBody_buttonSmall">
          <button type="button" className="float-end px-3">
            New
          </button>
        </div>

        <h4 className="mt-3 cardBody_title">Asset Code: {AssetCode}</h4>
        <div className="cardBody_details">
          <h6 className="my-3">
            <span className="cardBody_details-span1">Asset code</span>:{" "}
            {assetCode}
          </h6>{" "}
          <h6 className="my-3">
            <span className="cardBody_details-span1">
              Initial Offer Value (IOV)
            </span>
            : {Iov}
          </h6>{" "}
          <h6 className="my-3">
            <span className="cardBody_details-span1">Asset Claiming Time</span>:{" "}
            {AssetClaimTime}
          </h6>{" "}
          <h6 className="my-3">
            <span className="cardBody_details-span1">
              Asset Content: BNB: Binance Coin, SOL
            </span>
            : {AssetContent}
          </h6>{" "}
          <h6 className="my-3">
            <span className="cardBody_details-span1">Subscription so far</span>:{" "}
            {subscriptions}
          </h6>{" "}
          <h6 className="my-3">
            <span className="cardBody_details-span1">Offer Time left</span>:{" "}
            {offertime}
          </h6>{" "}
          <h6 className="my-3">(to acquire, click on the below button)</h6>
        </div>
        <button type="button" className="btn btn-primary float-start my-3">
          New
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  AssetCode: PropTypes.string.isRequired,
  assetCode: PropTypes.string.isRequired,
  Iov: PropTypes.string.isRequired,
  AssetClaimTime: PropTypes.string.isRequired,
  AssetContent: PropTypes.string.isRequired,
  subscriptions: PropTypes.number.isRequired,
  offertime: PropTypes.string.isRequired,
};

export default Card;
