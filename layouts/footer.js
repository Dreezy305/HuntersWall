import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="container pt-5">
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
      <hr style={{ border: "1px solid #75B1FB" }} />
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
      <hr style={{ border: "1px solid #75B1FB" }} />
      <div className="container pt-2">
        <div className="row text-center footer_h1 align-items-stretch">
          <h6 className="pb-3">
            {" "}
            <Link href={"/privacy"}>Privacy Policy.</Link>{" "}
            <Link href={"/terms"}>Terms & Conditions.</Link>
          </h6>
          <h6 className="pb-5">
            Copyright 2022. Hunterswall Strategies Limited (RC: 1843219)
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
