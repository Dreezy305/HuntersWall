import React from "react";

function Toast({
  visiblity = true || false,
  title = "",
  description = "",
  theme = "success" || "failure" || "warning" || "danger",
}) {
  return (
    <div className="toats" id="toast">
      <div className="">
        <span className="">&times;</span>
        <span>
          <span>{title}</span>
          <span>{description}</span>
        </span>
      </div>
    </div>
  );
}

export default Toast;
