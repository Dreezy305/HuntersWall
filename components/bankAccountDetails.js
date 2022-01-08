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

        {/* Bank Type */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Account Type</label>
            <br />
            <div className="p-3 profileNames">
              <p>Current</p>
            </div>
          </div>
        </div>

        {/* BVN */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">BVN</label>
            <br />
            <div className="p-3 profileNames">
              <p>967233109688288</p>
            </div>
          </div>
        </div>

        {/* Sort code */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Sort Code</label>
            <br />
            <div className="p-3 profileNames">
              <p>09869544</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccountDetails;
