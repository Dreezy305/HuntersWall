import React from "react";

function TopBar({
  title = "",
  firstName = "Ifeoluwa",
  lastName = "Eniola",
  ID = "Hun12345",
}) {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <h4 className="">{title}</h4>
      </div>
      <div className="topbar_right">
        <h6 className="d-flex flex-column align-items-end">
          <span>
            {firstName} {lastName}
          </span>
          <span>ID: {ID}</span>
        </h6>
      </div>
    </div>
  );
}

export default TopBar;
