"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Icons } from "./Icons.jsx";
import Link from "next/link.js";
import Easeanimation from "./Easeanimation.jsx";

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
            <Easeanimation
              y={3}
              duration={0.3}
              staggerChildren={0.1}
              className="navbar__menu"
            >
              <div className="navbar__item">
                <Link
                  href="/services"
                  className="nav__item text-xsmall text-fw-medium"
                >
                  Services
                </Link>
              </div>
              <div className="navbar__item">
                <Link href="/" className="nav__item text-xsmall text-fw-medium">
                  Company
                </Link>
              </div>
              <div className="navbar__item">
                <Link href="/" className="nav__item text-xsmall text-fw-medium">
                  Resources
                </Link>
              </div>
            </Easeanimation>
          </div>
          <Easeanimation y={10} duration={0.5} className="header__button">
            <Link href="/" className=" btn btn__primary btn__medium">
              Contact us
            </Link>
          </Easeanimation>
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
                  <Link
                    href="/services"
                    className="menu__text text-medium text-fw-medium"
                    onClick={handleToggle}
                  >
                    Services
                  </Link>
                  <Icons icon="menu_arrow_right" className="menu__icon" />
                </li>
                <li className="menu__item ">
                  <Link
                    href="/"
                    className="menu__text text-medium text-fw-medium"
                  >
                    Company
                  </Link>
                  <Icons icon="menu_arrow_right" className="menu__icon" />
                </li>
                <li className="menu__item">
                  <Link
                    href="/"
                    className="menu__text text-medium  text-fw-medium"
                  >
                    Resources
                  </Link>
                  <Icons icon="menu_arrow_right" className="menu__icon" />
                </li>
              </ul>
              <div className="menu__btn">
                <Link href="/" className="btn btn__large btn__primary">
                  Contact us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
