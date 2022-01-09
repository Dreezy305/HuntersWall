import React from "react";

function Wallet() {
  return (
    <div className="wallet">
      <div className="mt-3">
        <div className="card wallet_card" style={{}}>
          <div className="card-body">
            <h6>Net Worth</h6>
            <hr />
            <h6>N105,000.00</h6>
            <hr />
            <h6>Cash balance available</h6>
          </div>
        </div>
      </div>
      <div className="wallet_activity"></div>
    </div>
  );
}

export default Wallet;
