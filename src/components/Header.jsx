"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Icons } from "../assets/Icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header__navbar">
            <div className="navbar__logo">
              <Icons icon="datakulture_logo" />
            </div>
            <nav className="navbar__menu">
              <div className="navbar__item">
                <a>Services</a>
              </div>
              <div className="navbar__item">
                <a>Company</a>
              </div>
              <div className="navbar__item">
                <a>Resources</a>
              </div>
            </nav>
          </div>
          <div className="header__button">
            <a className=" btn btn__primary btn__medium">Contact us</a>
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
            <div className="menu__list-btn">
              <ul className="menu__list">
                <li className="menu__item">
                  <a className="menu__text">Services</a>
                  <Icons icon="menu_arrow_right" className="menu__icon" />
                </li>
                <li className="menu__item">
                  <a className="menu__text">Company</a>
                  <Icons icon="menu_arrow_right" className="menu__icon" />
                </li>
                <li className="menu__item">
                  <a className="menu__text">Resources</a>
                  <Icons icon="menu_arrow_right" className="menu__icon" />
                </li>
              </ul>
              <div className="menu__btn">
                <a className="btn btn__large btn__primary">Contact us</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
