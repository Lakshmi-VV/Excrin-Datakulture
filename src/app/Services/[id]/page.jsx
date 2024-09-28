"use client";
import React from "react";
import { servicesdata } from "@/app/servicedata/data";
import Ctasection from "@/components/Ctasection";
import Servicefaq from "@/components/Servicefaq";
import Testimonial from "@/components/Testimonial";
import Successstories from "@/components/Successstories";
import singleservicecta from "@/assets/images/ctabanner/ctabanner_singleservice.png";
import Ctabanner from "@/components/Ctabanner";
import Clientlogoslider from "@/components/Clientlogoslider";
import Link from "next/link";
import Image from "next/image";

function singleService({ params }) {
  const id = params.id;
  const service = servicesdata.find((service) => service.id === id);

  const benefits = [
    {
      id: 1,
      heading: "First benefit goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum congue purus sed viverra. Ut iaculis neque id ex viverra, a ullamcorper augue ullamcorper.",
    },
    {
      id: 2,
      heading: "Second benefit goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum congue purus sed viverra. Ut iaculis neque id ex viverra, a ullamcorper augue ullamcorper.",
    },
    {
      id: 3,
      heading: "Third benefit goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum congue purus sed viverra. Ut iaculis neque id ex viverra, a ullamcorper augue ullamcorper.",
    },
    {
      id: 4,
      heading: "Fourth benefit goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum congue purus sed viverra. Ut iaculis neque id ex viverra, a ullamcorper augue ullamcorper.",
    },
    {
      id: 5,
      heading: "Fifth benefit goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum congue purus sed viverra. Ut iaculis neque id ex viverra, a ullamcorper augue ullamcorper.",
    },
  ];
  return (
    <div className="">
      {/* <p>{service.id}</p>
      {params.id} */}

      {/* Single service hero */}
      <section className="singleservice-herosection">
        <div className="container singleservice__hero">
          <div className="singleservice__hero-content-image">
            <div className="singleservice__herocontent">
              <div className="singleservice__hero-title-description">
                <div className="singleservice__hero-breadcrumbs">
                  <Link href="/services" className="text-small text-fw-regular">
                    Services
                  </Link>
                  <span className="text-small text-fw-regular">/</span>
                  <Link
                    href={`/services/${id}`}
                    className="text-small text-fw-regular title"
                  >
                    {service.title}
                  </Link>
                </div>
                <h1 className="singleservice__hero-title text-large text-fw-medium">
                  {service.herosection.heading[0]}
                  <br />
                  {service.herosection.heading[1]}
                </h1>
                <p className="singleservice__hero-description text-small text-fw-regular">
                  {service.herosection.description}
                </p>
              </div>
              <div className="singleservice__hero-btn ">
                <button className="btn btn__primary btn__large">
                  Contact us
                </button>
              </div>
            </div>
            <div className="singleservice__hero-image">
              <Image
                src={service.herosection.imgSrc}
                className="singleservice__hero-img"
                alt="singleservice__hero-img"
              />
            </div>
          </div>
          <div className="clientlogo-slider">
            <Clientlogoslider />
          </div>
        </div>
      </section>

      <Ctabanner imgSrc={singleservicecta} />

      {/* Service benefits */}
      <section className="servicebenefits-section">
        <div className="container servicebenefits">
          <div className="servicebenefits__heading-sticky">
            <div className="servicebenefits__heading">
              <h4 className="servicebenefits__title text-xsmall text-fw-regular">
                BENEFITS
              </h4>
              <h2 className="servicebenefits__subtitle text-large text-fw-medium">
                How you can drive maximum value work with data.
              </h2>
            </div>
          </div>

          <div className="servicebenefits__content-line">
            {benefits.map((benefit, index) => {
              return (
                <>
                  <div className="servicebenefits__content">
                    <div className="servicebenefits__id-num">{benefit.id}</div>
                    <div className="servicebenefits__heading-description">
                      <h3 className="servicebenefits__benefitheading">
                        {benefit.heading}
                      </h3>
                      <p className="servicebenefits__description text-xsmall text-fw-regular">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {index !== benefits.length - 1 && (
                    <div className="horizontal-line"></div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Successstories slicenum="2" />
      <Testimonial />
      <Servicefaq />
      <Ctasection />
    </div>
  );
}

export default singleService;
