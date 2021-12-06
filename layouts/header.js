/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header ms-lg-5">
        <div className="nav-title">HuntersWall</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links me-5">
        <a href="/" as={Link} rel="noreferrer" className="color me-lg-4">
          Home
        </a>
        <a href="/aboutUs" as={Link} rel="noreferrer" className="color me-lg-4">
          About us
        </a>
        <a href="" as={Link} rel="noreferrer" className="color me-lg-4">
          Services
        </a>
        <a href="" as={Link} rel="noreferrer" className="color me-lg-4">
          Catalogue
        </a>
        <a href="" as={Link} rel="noreferrer" className="color me-lg-4">
          FAQ
        </a>

        <a href="" className="login color me-lg-3" rel="noreferrer">
          Login
        </a>
      </div>
    </div>
  );
}
