/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";

export const ProfileIcon = ({ fill, marginRight, padding, stylesObj }) => {
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
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="#2081F9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#2081F9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

ProfileIcon.propTypes = {
  fill: PropTypes.string,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  stylesObj: PropTypes.object,
};

export const WalletIcon = ({ fill, marginRight, padding, stylesObj }) => {
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
};

WalletIcon.propTypes = {
  fill: PropTypes.string,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  stylesObj: PropTypes.object,
};
