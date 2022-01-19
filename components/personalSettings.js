import React from "react";

function PersonalSettings() {
  return (
    <div className="personalSettings">
      <div className="container">
        <div className="row align-items-baseline">
          <div className="col-lg-6 border-end px-3">
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

              {/* LAST NAME */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">Last Name</label>
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

              {/* EMAIL */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">Last Name</label>
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

              {/* GENDER */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">Gender</label>
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

              {/* BIRTHDAY */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">Birthday</label>
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

              {/* PROFESSION */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-2">
                  Proffession
                </label>
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

              {/* ADDRESS */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">Address</label>
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

              {/* CITY */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">City</label>
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

              {/* COUNTRY */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">Country</label>
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
          <div className="col-lg-6 px-3">
            {/* CURRENT PSWD */}
            <form className="row g-4 py-5" onSubmit={(e) => e.preventDefault()}>
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">
                  Current Password
                </label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-50 input"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* NEW PSWD */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">
                  New Password
                </label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-50 input"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* CONFIRM PSWD */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label label pb-2 me-3">
                  Confirm Password
                </label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-50 input"
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

export default PersonalSettings;
