import React from "react";
import { Icons } from "../assets/Icons.jsx";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
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
              <p className="footer__heading">Services</p>
              <p className="footer__item">Data consulting</p>
              <p className="footer__item">Data engineering</p>
              <p className="footer__item">Data science</p>
              <p className="footer__item">Data visualization</p>
            </div>
            <div className="footer__company">
              <p className="footer__heading">Company</p>
              <p className="footer__item">About</p>
              <p className="footer__item">Careers</p>
              <p className="footer__item">Privacy Policy</p>
              <p className="footer__item">Terms & Conditions</p>
              <p className="footer__item">Contact</p>
            </div>
            <div className="footer__resources">
              <p className="footer__heading">Resources</p>
              <p className="footer__item">Blog</p>
              <p className="footer__item">Customer stories</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2023 Datakulture. All Rights Reserved.
          </p>
          <p className="footer__division">
            Datakulture is a division of Sedin Technologies
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
