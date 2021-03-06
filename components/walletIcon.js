import React from "react";
import PropTypes from "prop-types";

export default function WalletIcon({ fill, marginRight, padding, stylesObj }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      className={`me-${marginRight} p-${padding}`}
      style={stylesObj}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 10H23"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

WalletIcon.propTypes = {
  fill: PropTypes.string,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  stylesObj: PropTypes.object,
};
