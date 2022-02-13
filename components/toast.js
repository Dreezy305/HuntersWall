import React from "react";

function Toast({
  visiblity = true || false,
  title = "",
  description = "",
  theme = "success" || "error" || "warning" || "danger" || "info",
  position = "",
  handleClose = () => {},
}) {
  return (
    <div
      className={`toast-container ${
        position === "bottom-right" && "bottom-right"
      } ${visiblity ? "visible" : "invisible"}`}
      id=""
    >
      <div className="d-flex flex-row align-items-center">
        <span className="" onClick={handleClose} style={{ cursor: "pointer" }}>
          &times;
        </span>
        <div className="d-flex flex-row">
          <span>
            <img />
          </span>
          <span>
            <span>{title}</span>
            <span>{description}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Toast;

/**
 * position --> bottom-right etc
 */
