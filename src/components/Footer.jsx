import React from "react";
import { Icons } from "./Icons.jsx";
import Link from "next/link.js";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__top">
          <div className="footer-container">
            <div className="footer__about">
              <div className="footer__logo-description">
                <Icons icon="datakulture_logo" className="footer__logo" />
                <p className="footer__description text-xsmall  text-fw-regular">
                  The fastest and simple way to generate growing business
                  solutions with our products.
                </p>
              </div>
              <div className="footer__social-media">
                <a>
                  <Icons icon="twitter_icon" className="footer__icon" />
                </a>
                <a>
                  <Icons icon="linkdin_icon" className="footer__icon" />
                </a>
                <a>
                  <Icons icon="facebook_icon" className="footer__icon" />
                </a>
                <a>
                  <Icons icon="insta_icon" className="footer__icon" />
                </a>
              </div>
            </div>
            <div className="footer__services-company-resources">
              <div className="footer__services">
                <h4 className="footer__heading text-h4 text-fw-semibold">
                  Services
                </h4>
                <ul className="footer__list-item">
                  <li>
                    <Link href="/" className="footer__item">
                      Data consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Data engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Data science
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Data visualization
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__company">
                <h4 className="footer__heading text-h4 text-fw-semibold">
                  Company
                </h4>
                <ul className="footer__list-item">
                  <li>
                    <Link href="/" className="footer__item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__resources">
                <h4 className="footer__heading text-h4 text-fw-semibold">
                  Resources
                </h4>
                <ul className="footer__list-item">
                  <li>
                    <Link href="/" className="footer__item">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="footer__item">
                      Customer stories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <p className="footer__bottom-text text-xsmall text-fw-regular">
            © 2023 Datakulture. All Rights Reserved.
          </p>
          <p className="footer__bottom-text text-xsmall text-fw-regular">
            Datakulture is a division of Sedin Technologies
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
