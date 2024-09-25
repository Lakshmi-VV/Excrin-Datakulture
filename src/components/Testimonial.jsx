import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";
import Gold from "../assets/images/partnerlogo/microsoftgold.png";
import Tableau from "../assets/images/partnerlogo/tableau.png";
import Azure from "../assets/images/partnerlogo/azure.png";
import Aws from "../assets/images/partnerlogo/aws.png";
import TestimonialPattern from "../assets/images/gif/testimonalpattern.png";
import Client from "../assets/images/clientimg/client1.png";
import TestimonialHorizontal from "../assets/images/gif/testimonialhorizontal.png";

function Testimonial() {
  return (
    <>
      <section className="testimonial__section">
        <div className="container testimonial">
          <div className="testimonial__content">
            <div className="testimonial__title-arrows">
              <div className="testimonial__title-description">
                <h4 className="testimonial__title">CLIENT VOICES</h4>
                <h2 className="testimonial__description">
                  Partnerships that speak success
                </h2>
              </div>
              <div className="testimonial__arrows">
                <Link href="/" className="testimonial__arrow">
                  <Icons icon="left_arrow" width={24} height={24} />
                </Link>
                <Link href="/" className="testimonial__arrow">
                  <Icons icon="right_arrow" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className="testimonial__content-text">
              <div className="testimonial__img">
                <Image
                  src={TestimonialPattern}
                  alt="TestimonialPattern"
                  className="testimonial__image"
                />
                <Image
                  src={TestimonialHorizontal}
                  alt="TestimonialHorizontal pattern"
                  className="testimonialHorizontal__image"
                />
              </div>
              <div className="testimonial__client-text">
                <div>
                  <p className="client__review">
                    {`
                    We were really impressed with their service orientation and
                    understanding of our business. Showcasing expertise in data
                    engineering, Datakulture was successful in implementing the
                    dashboard, allowing the client to track their KPIs and make
                    data-driven decisions. The team's solid understanding of the
                    client's business and their needs was critical to the
                    project's success.`}
                  </p>
                </div>
                <div className="client__info">
                  <Image
                    src={Client}
                    alt="client image"
                    className="client_image"
                  />
                  <div className="client__name-company">
                    <p className="client-name">Biswajit Rath</p>
                    <p className="client-company">
                      Head of Analytics, Raymond Limited.
                    </p>
                  </div>
                  <div className="testimonal__arrows-mob">
                    <Link href="/">
                      <Icons icon="left_arrow" width={24} height={24} />
                    </Link>
                    <Link href="/">
                      <Icons icon="right_arrow" width={24} height={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="partnership">
            <div className="partnership__text">
              <p>We have Implemented 250+ Projects in Partnership with</p>
            </div>
            <div className="partners">
              <div className="partner">
                <Image
                  src={Gold}
                  className="microsoft-gold-partner"
                  alt="microsoft-gold-partner"
                />
              </div>
              <div className="partner">
                <Image
                  src={Tableau}
                  className="Tableau-partner"
                  alt="Tableau-partner"
                />
              </div>
              <div className="partner">
                <Image src={Aws} className="Aws-partner" alt="Aws-partner" />
              </div>
              <div className="partner">
                <Image
                  src={Azure}
                  className="Azure-partner"
                  alt="Azure-partner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
