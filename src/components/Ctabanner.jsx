import React from "react";
import Image from "next/image";

function Ctabanner({ imgSrc }) {
  return (
    <>
      <section className="ctabanner-section ">
        <div className=" ctabanner">
          <div className="ctabanner__content-btn">
            <div className="ctabanner__content">
              <h2 className="ctabanner__title">
                {`Let's decode your data together`}
              </h2>
              <p className="ctabanner__description">
                Start your journey with a free consultation from our data
                experts.
              </p>
            </div>
            <div className="ctabanner__btn">
              <button className="btn btn__large btn__white">
                Book free consultation
              </button>
            </div>
          </div>
          <div className="ctabanner__image">
            <Image
              src={imgSrc}
              className="ctabanner__img"
              alt="ctabanner image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Ctabanner;
