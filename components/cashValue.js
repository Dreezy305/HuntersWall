import React from "react";
import { DiversifiedPortfolio } from "../data/cashValueTable";

function CashValue() {
  return (
    <div className="cashValue">
      <h6 className="">Cash value invested per Asset</h6>

      <div className="container mt-4">
        <div className="row cashValue_row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="py-3">
                  Diversified Portfolio
                </th>
                <th scope="col" className="py-3">
                  Real Estate
                </th>
                <th scope="col" className="py-3">
                  Innovation
                </th>
                <th scope="col" className="py-3">
                  Commodities
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-3">DIV-076489: N50,000</td>
                <td className="py-3">REE-890352: N40,000</td>
                <td className="py-3">INN-087543: N120,000</td>
                <td className="py-3">COM-896369: N43,000</td>
              </tr>

              <tr>
                <td className="py-3">DIV-635423: N30,000</td>
                <td className="py-3">REE-056003: N90,000</td>
                <td className="py-3">INN-789232: N40,000</td>
                <td className="py-3">COM-109321: N93,000</td>
              </tr>

              <tr>
                <td className="py-3">DIV-157653: N100,000</td>
                <td className="py-3">REE-763908: N60,000</td>
                <td className="py-3">INN-321423: N50,000</td>
                <td className="py-3">COM-309321: N32,000</td>
              </tr>

              <tr>
                <td className="py-3">DIV-098635: N40,000</td>
                <td className="py-3">REE-124372: N20,000</td>
                <td className="py-3">INN-984272: N90,000</td>
                <td className="py-3">COM-090321: N55,000</td>
              </tr>

              <tr>
                <td className="py-3">DIV-273860: N20,000</td>
                <td className="py-3">REE-198732: N50,000</td>
                <td className="py-3">INN-124382: N50,000</td>
                <td className="py-3">COM-120942: N60,000</td>
              </tr>

              <tr>
                <td className="py-3">DIV-323417: N80,000</td>
                <td className="py-3">REE-287432: N70,000</td>
                <td className="py-3">INN-008232: N220,000</td>
                <td className="py-3">COM-092213: N20,000</td>
              </tr>

              <tr>
                <td className="py-3">Total: N320,000</td>
                <td className="py-3">Total: N330,000 </td>
                <td className="py-3">Total: N570,000 </td>
                <td className="py-3">Total: N303,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CashValue;
