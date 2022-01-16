import React from "react";
import { DiversifiedPortfolio } from "../data/cashValueTable";

function CashValue() {
  return (
    <div className="cashValue">
      <h6 className="">Cash value invested per Asset</h6>

      <div className="container mt-4">
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

            <tbody>
              <tr>
                <td>DIV-076489: N50,000</td>
                <td>REE-890352: N40,000</td>
                <td>INN-087543: N120,000</td>
                <td>COM-896369: N43,000</td>
              </tr>

              <tr>
                <td>DIV-635423: N30,000</td>
                <td>REE-056003: N90,000</td>
                <td>INN-789232: N40,000</td>
                <td>COM-109321: N93,000</td>
              </tr>

              <tr>
                <td>DIV-157653: N100,000</td>
                <td>REE-763908: N60,000</td>
                <td>INN-321423: N50,000</td>
                <td>COM-309321: N32,000</td>
              </tr>

              <tr>
                <td>DIV-098635: N40,000</td>
                <td>REE-124372: N20,000</td>
                <td>INN-984272: N90,000</td>
                <td>COM-090321: N55,000</td>
              </tr>

              <tr>
                <td>DIV-098635: N40,000</td>
                <td>REE-124372: N20,000</td>
                <td>INN-984272: N90,000</td>
                <td>COM-090321: N55,000</td>
              </tr>

              <tr>
                <td>DIV-098635: N40,000</td>
                <td>REE-124372: N20,000</td>
                <td>INN-984272: N90,000</td>
                <td>COM-090321: N55,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CashValue;
