import React from "react";

function BankAccSettings() {
  return (
    <div className="bankAccSettings">
      Bank Account Settings
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form
              className="row g-4 py-5"
              onSubmit={(e) => e.preventDefault()}
            ></form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccSettings;
