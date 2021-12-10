import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer">
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
    </footer>
  );
}

export default Footer;
