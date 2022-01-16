import React from "react";

function CashValue() {
  return (
    <div className="cashValue">
      <h6 className="">Cash value invested per Asset</h6>

      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Diversified Portfolio</th>
                <th scope="col">Real Estate</th>
                <th scope="col">Innovation</th>
                <th scope="col">Commodities</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CashValue;
