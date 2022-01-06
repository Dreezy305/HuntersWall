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

export const ShoppingIcon = ({
  fill,
  marginRight,
  padding,
  stylesObj,
  className,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      className={`me-${marginRight} p-${padding} ${className}`}
      style={stylesObj}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

ShoppingIcon.propTypes = {
  fill: PropTypes.string,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  stylesObj: PropTypes.object,
  className: PropTypes.string,
};

export const NairaIcon = ({
  fill,
  marginRight,
  padding,
  stylesObj,
  className,
}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 35 43"
      fill={fill}
      className={`me-${marginRight} p-${padding} ${className}`}
      style={stylesObj}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.192 9.206V35H25.446C25.17 35 24.936 34.952 24.744 34.856C24.564 34.76 24.384 34.598 24.204 34.37L9.282 14.93C9.306 15.23 9.324 15.524 9.336 15.812C9.348 16.1 9.354 16.37 9.354 16.622V35H6.294V9.206H8.094C8.25 9.206 8.382 9.218 8.49 9.242C8.598 9.254 8.694 9.284 8.778 9.332C8.862 9.368 8.946 9.428 9.03 9.512C9.114 9.584 9.204 9.68 9.3 9.8L24.222 29.222C24.198 28.91 24.174 28.61 24.15 28.322C24.138 28.022 24.132 27.74 24.132 27.476V9.206H27.192Z"
        fill="white"
      />
      <rect y="15" width="35" height="4" fill="white" />
      <rect y="25" width="35" height="4" fill="white" />
    </svg>
  );
};

NairaIcon.propTypes = {
  fill: PropTypes.string,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  stylesObj: PropTypes.object,
  className: PropTypes.string,
};

export const MarketIcon = ({
  fill,
  marginRight,
  padding,
  stylesObj,
  className,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      className={`me-${marginRight} p-${padding} ${className}`}
      style={stylesObj}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3H3V10H10V3Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 3H14V10H21V3Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 14H14V21H21V14Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14H3V21H10V14Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

MarketIcon.propTypes = {
  fill: PropTypes.string,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  stylesObj: PropTypes.object,
  className: PropTypes.string,
};
