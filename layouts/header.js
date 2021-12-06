/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header ms-5">
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
        <a href="/" as={Link} rel="noreferrer">
          Home
        </a>
        <a href="/aboutUs" as={Link} rel="noreferrer">
          About us
        </a>
        <a href="" as={Link} rel="noreferrer">
          Services
        </a>
        <a href="" as={Link} rel="noreferrer">
          Catalogue
        </a>
        <a href="" as={Link} rel="noreferrer">
          FAQ
        </a>

        <a href="" rel="noreferrer">
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}
