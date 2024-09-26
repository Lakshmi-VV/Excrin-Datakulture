"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";
import Gold from "../assets/images/partnerlogo/microsoftgold.png";
import Tableau from "../assets/images/partnerlogo/tableau.png";
import Azure from "../assets/images/partnerlogo/azure.png";
import Aws from "../assets/images/partnerlogo/aws.png";
import TestimonialPattern from "../assets/images/gif/testimonalpattern.png";
import Client1 from "../assets/images/clientimg/client1.png";
import Client2 from "../assets/images/clientimg/client2.png";
import TestimonialHorizontal from "../assets/images/gif/testimonialhorizontal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

function Testimonial() {
  const partners = [
    {
      imgSrc: Gold,
      name: "Microsoft-Gold-Partner",
    },
    {
      imgSrc: Tableau,
      name: "Tableau-partner",
    },
    {
      imgSrc: Aws,
      name: "Aws-partner",
    },
    {
      imgSrc: Azure,
      name: "Azure-partner",
    },
  ];

  const clientReview = [
    {
      imgSrc: Client1,
      clientName: "Biswajit Rath",
      company: " Head of Analytics, Raymond Limited.",
      review:
        "We were really impressed with their service orientation and understanding of our business. Showcasing expertise in data engineering, Datakulture was successful in implementing the dashboard, allowing the client to track their KPIs and make data-driven decisions. The team's solid understanding of the client's business and their needs was critical to the project's success.",
    },
    {
      imgSrc: Client2,
      clientName: "Bhargav Raghavendra",
      company: " Senior IT Director, Cyient",
      review:
        "They were flexible and adaptive to the client's changing requirements. The team executed a smooth workflow to ensure the project's success. Their flexibility and adaptiveness were notable in the partnership.",
    },
  ];
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
                <Link
                  href="/"
                  className="testimonial__arrow testimonial__arrow-prev"
                >
                  <Icons icon="left_arrow" width={24} height={24} />
                </Link>
                <Link
                  href="/"
                  className="testimonial__arrow testimonial__arrow-next"
                >
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

              <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".testimonial__arrow-next",
                  prevEl: ".testimonial__arrow-prev",
                }}
              >
                <div className="testimonial__client-text">
                  {clientReview.map((client, index) => {
                    return (
                      <>
                        <SwiperSlide>
                          <div>
                            <p className="client__review">{client.review}</p>
                          </div>
                          <div className="client__info">
                            <Image
                              src={client.imgSrc}
                              alt="client image"
                              className="client_image"
                            />
                            <div className="client__name-company">
                              <p className="client-name">{client.clientName}</p>
                              <p className="client-company">{client.company}</p>
                            </div>

                            <div className="testimonal__arrows-mob">
                              <Link href="/" className="testimonial__arrow ">
                                <Icons
                                  icon="left_arrow"
                                  width={24}
                                  height={24}
                                />
                              </Link>
                              <Link href="/" className="testimonial__arrow ">
                                <Icons
                                  icon="right_arrow"
                                  width={24}
                                  height={24}
                                />
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="partnership">
            <div className="partnership__text">
              <p>We have Implemented 250+ Projects in Partnership with</p>
            </div>
            <div className="partners">
              {partners.map((partner) => {
                return (
                  <>
                    <div className="partner">
                      <Image
                        src={partner.imgSrc}
                        className={`${partner.name}`}
                        alt={`${partner.name}`}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Testimonial;
