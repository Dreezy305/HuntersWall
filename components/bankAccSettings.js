import React from "react";

function BankAccSettings() {
  return (
    <div className="bankAccSettings">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form className="row g-4 py-5" onSubmit={(e) => e.preventDefault()}>
              {/* FIRST NAME */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3 label">First Name</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75 input"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccSettings;
