import React from "react";

function BankAccSettings() {
  return (
    <div className="bankAccSettings">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form className="row g-4 py-5" onSubmit={(e) => e.preventDefault()}>
              {/* ACC NAME */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-1 label">
                  Account Name
                </label>
                <br />
                <input
                  type="text"
                  className="ms-1 w-75 input"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* BANK NAME */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3 label">Bank Name</label>
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

              {/* ACC NUMBER */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-1 label">
                  Account Number
                </label>
                <br />
                <input
                  type="text"
                  className="ms-1 w-75 input"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* BANK TYPE */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3 label">Bank Type</label>
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

              {/* BVN */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3 label">BVN</label>
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

              {/* SORT CODE */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3 label">Sort Code</label>
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

              {/* SAVE */}
              <div className="d-flex justify-content-end">
                <button className="settings_btn px-3 py-3 w-25">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccSettings;
