import React from "react";

function BankAccountDetails() {
  return (
    <div className="profile_bankDetails">
      <div className="profile_personalInfo-wrapper">
        {/* Account Name */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Account Name</label>
            <br />
            <div className="p-3 profileNames">
              <p>Olagbemi Ifeoluwa</p>
            </div>
          </div>
        </div>

        {/* Bank name */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Bank Name</label>
            <br />
            <div className="p-3 profileNames">
              <p>Zuzuki Bank</p>
            </div>
          </div>
        </div>

        {/* Account number */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Account Number</label>
            <br />
            <div className="p-3 profileNames">
              <p>0978234294</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccountDetails;
