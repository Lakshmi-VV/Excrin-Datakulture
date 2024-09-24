import React from "react";
import { Icons } from "../assets/Icons.jsx";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__top">
          <div className="footer-container">
            <div className="footer__about">
              <div className="footer__logo-description">
                <Icons icon="datakulture_logo" className="footer__logo" />
                <p className="footer__description">
                  The fastest and simple way to generate growing business
                  solutions with our products.
                </p>
              </div>
              <div className="footer__social-media">
                <Icons icon="twitter_icon" className="footer__icon" />
                <Icons icon="linkdin_icon" className="footer__icon" />
                <Icons icon="facebook_icon" className="footer__icon" />
                <Icons icon="insta_icon" className="footer__icon" />
              </div>
            </div>
            <div className="footer__services-company-resources">
              <div className="footer__services">
                <h4 className="footer__heading">Services</h4>
                <ul className="footer__list-item">
                  <li className="footer__item">
                    <a>Data consulting</a>
                  </li>
                  <li className="footer__item">
                    <a>Data engineering</a>
                  </li>
                  <li className="footer__item">
                    <a>Data science</a>
                  </li>
                  <li className="footer__item">
                    <a>Data visualization</a>
                  </li>
                </ul>
              </div>
              <div className="footer__company">
                <h4 className="footer__heading">Company</h4>
                <ul className="footer__list-item">
                  <li className="footer__item">
                    <a>About</a>
                  </li>
                  <li className="footer__item">
                    <a>Careers</a>
                  </li>
                  <li className="footer__item">
                    <a>Privacy Policy</a>
                  </li>
                  <li className="footer__item">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer__resources">
                <h4 className="footer__heading">Resources</h4>
                <ul className="footer__list-item">
                  <li className="footer__item">
                    <a>Blog</a>
                  </li>
                  <li className="footer__item">
                    <a>Customer stories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <p className="footer__bottom-text">
            © 2023 Datakulture. All Rights Reserved.
          </p>
          <p className="footer__bottom-text">
            Datakulture is a division of Sedin Technologies
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
