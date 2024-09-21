"use client";
import { useState } from "react";
import React from "react";
import { Icons } from "../assets/Icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header__navbar">
            <div className="navbar__logo">
              <Icons icon="datakulture_logo" />
            </div>
            <nav className="navbar__menu">
              <div className="navbar__item">Services</div>
              <div className="navbar__item">Company</div>
              <div className="navbar__item">Resources</div>
            </nav>
          </div>
          <div className="header__button">
            <button className=" btn btn__primary btn__medium">
              Contact us
            </button>
          </div>
        </div>
      </header>
      <div className="mobile-nav">
        <div className="container">
          <div className="navbar__toggle">
            <div>
              <Icons icon="datakulture_logo" />
            </div>

            <div className="menu__toggle" onClick={handleToggle}>
              {isMenuOpen ? (
                <Icons icon="menu_close" />
              ) : (
                <Icons icon="menu_button" />
              )}
            </div>
          </div>

          <nav className={isMenuOpen ? "menu menu--open" : "menu"}>
            <div className="container menu__list-btn">
              <ul className="menu__list">
                <li className="menu__item">
                  <span className="menu__text">Services</span>
                  <Icons icon="arrow_right" className="menu__icon" />
                </li>
                <li className="menu__item">
                  <span className="menu__text">Company</span>
                  <Icons icon="arrow_right" className="menu__icon" />
                </li>
                <li className="menu__item">
                  <span className="menu__text">Resources</span>
                  <Icons icon="arrow_right" className="menu__icon" />
                </li>
              </ul>
              <div className="menu__btn">
                <button className="btn btn__large btn__primary">
                  Contact us
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
