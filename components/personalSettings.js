import React from "react";

function PersonalSettings() {
  return (
    <div className="personalSettings">
      Persal settings
      <div className="container">
        <div className="row">
          <div className="col-lg-6 border-end">
            <form className="row g-4 py-5" onSubmit={(e) => e.preventDefault()}>
              {/* FIRST NAME */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">First Name</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* LAST NAME */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">Last Name</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">Last Name</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* GENDER */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">GENDER</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* BIRTHDAY */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">BIRTHDAY</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* PROFESSION */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">PROFESSION</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* ADDRESS */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">ADDRESS</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* CITY */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">CITY</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>

              {/* COUNTRY */}
              <div className="d-flex justify-content-between align-items-baseline">
                <label className="form-label pb-2 me-3">COUNTRY</label>
                <br />
                <input
                  type="text"
                  className="ms-3 w-75"
                  value=""
                  autoComplete="on"
                  autoFocus
                  required
                />
              </div>
            </form>
          </div>
          <div className="col-lg-6 border-start">col 2</div>
        </div>
      </div>
    </div>
  );
}

export default PersonalSettings;
