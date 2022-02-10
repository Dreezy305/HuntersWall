/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import SideBar from "../Dashboard/SideBar";
import TopBar from "../Dashboard/TopBar";

function TransactionHistory() {
  const [mobile, setMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileBg, setMobileBg] = useState("");
  const [mobileColor, setMobileColor] = useState("#2081f9");

  const toggle = () => {
    setMobile(!mobile);
  };

  const router = useRouter();

  return (
    <>
      <div className="dashboard">
        <div className="mobile" style={{ background: mobileBg }}>
          <div className="left_text">
            <h3 className="mb-5" style={{ color: mobileColor }}>
              HuntersWall
            </h3>
          </div>
          <div className="svg">
            {!mobile ? (
              <svg
                width="32"
                height="21"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  toggle();
                  setMobileBg("#2081f9");
                  setMobileMenu(true);
                  setMobileColor("#ffffff");
                }}
              >
                <rect
                  y="0.120117"
                  width="32"
                  height="4"
                  rx="2"
                  fill="#2081F9"
                />
                <rect y="8.44019" width="32" height="4" rx="2" fill="#2081F9" />
                <rect y="16.76" width="32" height="4" rx="2" fill="#2081F9" />
              </svg>
            ) : (
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  toggle();
                  setMobileBg("");
                  setMobileMenu(false);
                  setMobileColor("#2081f9");
                }}
              >
                <rect
                  x="21.2131"
                  y="0.211426"
                  width="4"
                  height="30"
                  rx="2"
                  transform="rotate(45 21.2131 0.211426)"
                  fill="white"
                />
                <rect
                  x="1.16797"
                  y="2.82812"
                  width="4"
                  height="30"
                  rx="2"
                  transform="rotate(-45 1.16797 2.82812)"
                  fill="white"
                />
              </svg>
            )}
          </div>

          {mobileMenu && (
            <>
              <ul className="list-unstyled">
                <li>Profile</li>
                <li>Wallet</li>
                <li>Loan request</li>
              </ul>
            </>
          )}
        </div>

        <div className="dashboard_left">
          <SideBar handleClick={(t) => handleClick(t)} />
        </div>

        <div className="dashboard_right">
          <TopBar
            title={`Transaction History`}
            firstName={router.query.firstName}
            lastName={router.query.lastName}
            ID={router.query.userId}
          />
          <div className="position-sticky"></div>
          {/* <>{Pages[counter].component}</> */}
          <div className="transaction">
            <div className="container  mt-1">
              <div className="row transaction_row">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3">
                        <span className="me-1">Date</span>{" "}
                        <span>
                          <img
                            src="/img/down3.svg"
                            className="ms-1"
                            alt="filter"
                          />
                        </span>
                      </th>
                      <th scope="col" className="py-3">
                        <span>Time</span>
                      </th>
                      <th scope="col" className="py-3">
                        <span className="me-1">Transaction Type</span>{" "}
                        <span>
                          <img
                            src="/img/down3.svg"
                            className="ms-1"
                            alt="filter"
                          />
                        </span>
                      </th>
                      <th scope="col" className="py-3">
                        <span className="me-1">Status</span>{" "}
                        <span>
                          <img
                            src="/img/down3.svg"
                            className="ms-1"
                            alt="filter"
                          />
                        </span>
                      </th>
                      <th scope="col" className="py-3">
                        <span className="me-1">Description</span>{" "}
                        <span>
                          <img
                            src="/img/down3.svg"
                            className="ms-1"
                            alt="filter"
                          />
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
        </div>
      </div>
      {/* MMM */}
    </>
  );
}

export default TransactionHistory;
