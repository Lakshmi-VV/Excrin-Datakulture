import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ctaimage from "../assets/images/gif/ctasection.png";
import Easeanimation from "./Easeanimation";

function Ctasection() {
  return (
    <>
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-section__content-btn">
            <Easeanimation className="cta-section__content">
              <h2 className="cta-section__title text-large  text-fw-medium">
                {`Let's build your data culture together`}
              </h2>
              <p className="cta-section__description text-small  text-fw-regular">
                Talk to a Datakulture consultant today.
              </p>
            </Easeanimation>
            <Link
              href="/"
              className="btn btn__secondary btn__large cta-section__btn"
            >
              Contact us
            </Link>
          </div>

          <Image
            src={Ctaimage}
            className="cta-section__image"
            alt="cta section image"
          />
        </div>
      </section>
    </>
  );
}

export default Ctasection;
