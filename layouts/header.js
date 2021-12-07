/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function Header() {
  const [mobile, setMobile] = useState(false);

  Router.events.on("routeChangeStart", () => {
    NProgress.set(0.4);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    setMobile(false);
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  const toggle = () => {
    setMobile(!mobile);
  };

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header ms-lg-5">
        <div className="nav-title nav-headline">HuntersWall</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check" id="nav-icon">
          {/* <span></span> */}
          {/* <span></span> */}
          {/* <span></span> */}
          {!mobile ? (
            <svg
              width="32"
              height="21"
              viewBox="0 0 32 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => toggle()}
            >
              <rect y="0.120117" width="32" height="4" rx="2" fill="#2081F9" />
              <rect y="8.44019" width="32" height="4" rx="2" fill="#2081F9" />
              <rect y="16.76" width="32" height="4" rx="2" fill="#2081F9" />
            </svg>
          ) : (
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => toggle()}
            >
              <rect
                x="21.2134"
                y="0.211426"
                width="4"
                height="30"
                rx="2"
                transform="rotate(45 21.2134 0.211426)"
                fill="#2081F9"
              />
              <rect
                x="1.16797"
                y="2.82812"
                width="4"
                height="30"
                rx="2"
                transform="rotate(-45 1.16797 2.82812)"
                fill="#2081F9"
              />
            </svg>
          )}
        </label>
      </div>

      <div className="nav-links me-5">
        <a
          href="/"
          as={Link}
          rel="noreferrer"
          className="color me-lg-4 padMobile"
        >
          Home
        </a>
        <a
          href="/aboutUs"
          as={Link}
          rel="noreferrer"
          className="color me-lg-4 padMobile"
        >
          About us
        </a>
        <a
          href="/services"
          as={Link}
          rel="noreferrer"
          className="color me-lg-4 padMobile"
        >
          Services
        </a>
        <a
          href="/catalogue"
          as={Link}
          rel="noreferrer"
          className="color me-lg-4 padMobile"
        >
          Catalogue
        </a>
        <a
          href="/faq"
          as={Link}
          rel="noreferrer"
          className="color me-lg-4 padMobile"
        >
          FAQ
        </a>

        <a
          href="/login"
          className="login color me-lg-3 p-lg-2 pt-lg-1 padMobile"
          rel="noreferrer"
        >
          <span className="px-lg-3 px-3">Login</span>
        </a>
      </div>
    </div>
  );
}
