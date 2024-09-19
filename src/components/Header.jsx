import React from "react";
import { Icons } from "../assets/Icons";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__navbar">
          <div className="navbar__logo">
            <Icons icon="datakulture_logo" />
          </div>
          <div className="navbar__menu">
            <span className="navbar__item">Services</span>
            <span className="navbar__item">Company</span>
            <span className="navbar__item">Resources</span>
          </div>
        </div>
        <div className="header__button">
          <button className="header__contact-button">Contact us</button>
        </div>
      </div>
    </>
  );
}

export default Header;
