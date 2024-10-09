"use client";
import React from "react";
import Image from "next/image";
import Easeanimation from "./Easeanimation.jsx";
import { motion } from "framer-motion";

function Ctabanner({ imgSrc }) {
  return (
    <>
      <section className="ctabanner-section ">
        <div className=" ctabanner">
          <div className="ctabanner__content-btn">
            <Easeanimation staggerChildren={0.3} className="ctabanner__content">
              <h2 className="ctabanner__title">
                {`Let's decode your data together`}
              </h2>
              <p className="ctabanner__description">
                Start your journey with a free consultation from our data
                experts.
              </p>
            </Easeanimation>
            <Easeanimation delay={0.5} className="ctabanner__btn">
              <button className="btn btn__large btn__white">
                Book free consultation
              </button>
            </Easeanimation>
          </div>
          <div className="ctabanner__image">
            <Image
              src={imgSrc}
              className="ctabanner__img"
              alt="ctabanner image"
              width={649}
              height={388}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Ctabanner;
