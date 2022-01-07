import React from "react";

function PersonalInfo() {
  return (
    <div className="profile_personalInfo">
      <div className="profile_personalInfo-wrapper">
        {/* last and first name */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-3">
            <label className="form-label pb-2">First Name</label>
            <br />
            <div className="p-3 profileNames">
              <p>Ifeoluwa</p>
            </div>
          </div>
          <div className="text-start col-lg-3">
            <label className="form-label pb-2">Last Name</label>
            <br />
            <div className="p-3 profileNames">
              <p>Olagbeni</p>
            </div>
          </div>
        </div>

        {/* user id */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">User Id</label>
            <br />
            <div className="p-3 profileNames">
              <p>Hun023475</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Email</label>
            <br />
            <div className="p-3 profileNames">
              <p>olagbemiifeoluwa@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Gender and birthday */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-2">
            <label className="form-label pb-2">Gender</label>
            <br />
            <div className="p-3 profileNames">
              <p>Male</p>
            </div>
          </div>
          <div className="text-start col-lg-4">
            <label className="form-label pb-2">Birthday</label>
            <br />
            <div className="p-3 profileNames">
              <p>10/08/1987</p>
            </div>
          </div>
        </div>

        {/* Profession */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Profession</label>
            <br />
            <div className="p-3 profileNames">
              <p>Product Designer</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Address</label>
            <br />
            <div className="p-3 profileNames">
              <p></p>
            </div>
          </div>
        </div>

        {/* City */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">City</label>
            <br />
            <div className="p-3 profileNames">
              <p></p>
            </div>
          </div>
        </div>

        {/* Country */}
        <div className="row align-items-center profile_personalInfo-names mb-3">
          <div className="text-start col-lg-6">
            <label className="form-label pb-2">Country</label>
            <br />
            <div className="p-3 profileNames">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
