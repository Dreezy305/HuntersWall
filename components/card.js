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
      <div className={`card-body d-flex flex-column ${styles.cardBody}`}>
        <div className="cardBody_button">
          <button type="button" className="float-end">
            New
          </button>
        </div>

        <h4 className="mt-3">Asset Code: {AssetCode}</h4>
        <div>
          <h6 className="my-3">
            <span>Asset code</span>: {assetCode}
          </h6>{" "}
          <h6 className="my-3">
            <span>Initial Offer Value (IOV)</span>: {Iov}
          </h6>{" "}
          <h6 className="my-3">
            <span>Asset Claiming Time</span>: {AssetClaimTime}
          </h6>{" "}
          <h6 className="my-3">
            <span>Asset Content: BNB: Binance Coin, SOL</span>: {AssetContent}
          </h6>{" "}
          <h6 className="my-3">
            <span>Subscription so far</span>: {subscriptions}
          </h6>{" "}
          <h6 className="my-3">
            <span>Offer Time left</span>: {offertime}
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
