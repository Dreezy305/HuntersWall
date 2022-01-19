import React, { useState } from "react";

function Settings() {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="settings">
      <div className="settings_top d-flex align-items-center justify-content-start">
        <h6 className="tabs me-5 h6" onClick={() => setToggle(0)}>
          Personal Settings
        </h6>
        <h6 className="tabs ms-5 h6" onClick={() => setToggle(1)}>
          Bank Account Details
        </h6>
      </div>
    </div>
  );
}

export default Settings;
