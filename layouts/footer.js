import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="container pt-4">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2 footer_col1">
            <h1 className="">HuntersWall</h1>
          </div>
          <div className="col-lg-8 d-lg-flex justify-content-between footer_col2">
            <h5>Company</h5>
            <h5>About</h5>
            <h5>Service</h5>
            <h5>FAQ</h5>
            <h5>Contact</h5>
          </div>
        </div>
      </div>
      <hr />
      <div className="container pt-2">
        <div className="row footer_p">
          <p>
            Even with deep knowledge on risk control, we reiterate that
            investments are subject to market risk, while some can also be
            affected by natural disasters. Please read the scheme information
            and related documents carefully before committing your funds. Past
            performance is not indicative of future returns. Please consider
            your specific risk tolerance before choosing a category.
          </p>
        </div>
      </div>
      <hr />
      <div className="container pt-2">
        <div className="row text-center footer_h1">
          <h6> Privacy Policy. Terms & Conditions.</h6>
          <h6>Copyright 2022. Hunterswall Strategies Limited (RC: 1843219)</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
