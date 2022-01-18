/* eslint-disable @next/next/no-img-element */
import React from "react";

function TransactionHistory() {
  return (
    <div className="transaction">
      <div className="container  mt-1">
        <div className="row transaction_row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="py-3">
                  <span className="me-1">Date</span>{" "}
                  <span>
                    <img src="/img/down3.svg" className="ms-1" alt="filter" />
                  </span>
                </th>
                <th scope="col" className="py-3">
                  <span>Time</span>
                </th>
                <th scope="col" className="py-3">
                  <span className="me-1">Transaction Type</span>{" "}
                  <span>
                    <img src="/img/down3.svg" className="ms-1" alt="filter" />
                  </span>
                </th>
                <th scope="col" className="py-3">
                  <span className="me-1">Status</span>{" "}
                  <span>
                    <img src="/img/down3.svg" className="ms-1" alt="filter" />
                  </span>
                </th>
                <th scope="col" className="py-3">
                  <span className="me-1">Description</span>{" "}
                  <span>
                    <img src="/img/down3.svg" className="ms-1" alt="filter" />
                  </span>
                </th>
                <th scope="col" className="py-3">
                  <span>Amount</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-3">09/10/2021</td>
                <td className="py-3">2:01am</td>
                <td className="py-3">Loan request</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N50, 000 </td>
              </tr>

              <tr>
                <td className="py-3">10/10/2021</td>
                <td className="py-3">4:45pm</td>
                <td className="py-3">Loan request</td>
                <td className="py-3">
                  <span className="failure">Failure</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N70, 000 </td>
              </tr>

              <tr>
                <td className="py-3">11/10/2021</td>
                <td className="py-3">2:01am</td>
                <td className="py-3">Loan request</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N50, 000 </td>
              </tr>

              <tr>
                <td className="py-3">11/10/2021</td>
                <td className="py-3">3:01am</td>
                <td className="py-3">Loan request</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">REE-34567</td>
                <td className="py-3">N80, 000 </td>
              </tr>

              <tr>
                <td className="py-3">12/10/2021</td>
                <td className="py-3">2:01am</td>
                <td className="py-3">Assest Liquidation</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">REE-67890</td>
                <td className="py-3">N50, 000 </td>
              </tr>

              <tr>
                <td className="py-3">13/10/2021</td>
                <td className="py-3">6:01am</td>
                <td className="py-3">Deposit</td>
                <td className="py-3">
                  <span className="failure">Failure</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N30, 000 </td>
              </tr>

              <tr>
                <td className="py-3">14/10/2021</td>
                <td className="py-3">7:05am</td>
                <td className="py-3">Withdrawal</td>
                <td className="py-3">
                  <span className="failure">Failure</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N30, 000 </td>
              </tr>

              <tr>
                <td className="py-3">14/10/2021</td>
                <td className="py-3">4:01am</td>
                <td className="py-3">Loan request</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N50, 000 </td>
              </tr>

              <tr>
                <td className="py-3">14/10/2021</td>
                <td className="py-3">6:45am</td>
                <td className="py-3">Asset Subscription</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">DIV-78653</td>
                <td className="py-3">N40, 000 </td>
              </tr>

              <tr>
                <td className="py-3">15/10/2021</td>
                <td className="py-3">7:00am</td>
                <td className="py-3">Assest Liquidation</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">COM-35289</td>
                <td className="py-3">N50, 000 </td>
              </tr>

              <tr>
                <td className="py-3">15/10/2021</td>
                <td className="py-3">2:33am</td>
                <td className="py-3">Deposit</td>
                <td className="py-3">
                  <span className="success">Success</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N100, 000 </td>
              </tr>

              <tr>
                <td className="py-3">16/10/2021</td>
                <td className="py-3">3:33am</td>
                <td className="py-3">Withdrawal</td>
                <td className="py-3">
                  <span className="failure">Failure</span>
                </td>
                <td className="py-3">Loan</td>
                <td className="py-3">N50, 000 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
