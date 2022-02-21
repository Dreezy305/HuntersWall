/* eslint-disable @next/next/no-img-element */
import React from "react";

function Toast({
  visiblity = true || false,
  title = "",
  description = "",
  theme = "success" || "error" || "warning" || "danger" || "info",
  position = "bottom-right" ||
    "bottom-left" ||
    "bottom-center" ||
    "top-left" ||
    "top-right" ||
    "top-center",
  handleClose = () => {},
}) {
  const imageRes = {
    success: "/img/success.svg",
    error: "/img/error.svg",
    info: "/img/info.svg",
    warning: "/img/warning.svg",
    danger: "/img/danger.svg",
  };

  return (
    <div
      className={`toast-container ${visiblity ? "visible" : "invisible"} ${
        theme === "success"
          ? "success"
          : theme === "error"
          ? "danger"
          : theme === "warning"
          ? "warning"
          : theme === "info"
          ? "info"
          : theme === "danger"
          ? "danger"
          : "primary"
      } ${
        position === "bottom-right"
          ? "bottom-right"
          : position === "bottom-left"
          ? "bottom-left"
          : position === "bottom-center"
          ? "bottom-center"
          : position === "top-right"
          ? "top-right"
          : position === "top-left"
          ? "top-left"
          : position === "top-center"
          ? "top-center"
          : "bottom-left"
      }`}
      id=""
    >
      <div className="d-flex flex-row align-items-baseline notification py-3">
        <div className="d-flex flex-row">
          <span className="align-self-center ps-4">
            {theme === "success" && (
              <img src={imageRes.success} className="" alt="success" />
            )}
            {theme === "error" && (
              <img src={imageRes.error} className="" alt="success" />
            )}
            {theme === "info" && (
              <img src={imageRes.info} className="" alt="success" />
            )}
            {theme === "warning" && (
              <img src={imageRes.warning} className="" alt="success" />
            )}
            {theme === "danger" && (
              <img src={imageRes.danger} className="" alt="success" />
            )}
          </span>
          <div className="d-flex flex-column text-center">
            <p className="title fw-bold text-white">{title}</p>
            <p className="description px-5 text-white">{description}</p>
          </div>
        </div>
        <span
          className="pe-4 fw-bold times"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        >
          &times;
        </span>
      </div>
    </div>
  );
}

export default Toast;

/**
 * position --> bottom-right etc
 */
