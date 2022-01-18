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
                <td className="py-3">09/10/2021</td>
                <td className="py-3">2:01am</td>
                <td className="py-3">Loan request</td>
                <td className="py-3">
                  <span className="success">Success</span>
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
