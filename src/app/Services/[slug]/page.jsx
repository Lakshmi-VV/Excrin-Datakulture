"use client";
import React, { useState } from "react";
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
import { Icons } from "@/components/Icons";
import Easeanimation from "@/components/Easeanimation";

function SingleService({ params }) {
  const slug = params.slug;
  const service = servicesdata.find((service) => service.slug === slug);

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

  const [activeStages, setActiveStages] = useState([0]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const handleStepClick = (index) => {
    if (index > activeStages[activeStages.length - 1]) {
      setActiveStages([...Array(index + 1).keys()]);
    } else {
      setActiveStages(activeStages.filter((stage) => stage <= index));
    }
    setCurrentStageIndex(index);
  };

  const [activeIndex, setActiveIndex] = useState();
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Single service hero */}
      <section className="singleservice-herosection">
        <div className="container singleservice__hero">
          <div className="singleservice__hero-content-image">
            <div className="singleservice__herocontent">
              <Easeanimation className="singleservice__hero-title-description">
                <div className="singleservice__hero-breadcrumbs">
                  <Link href="/services" className="text-small text-fw-regular">
                    Services
                  </Link>
                  <span className="text-small text-fw-regular">/</span>
                  <Link
                    href={`/services/${slug}`}
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
              </Easeanimation>
              <Easeanimation delay={1.5} className="singleservice__hero-btn ">
                <button className="btn btn__primary btn__large">
                  Contact us
                </button>
              </Easeanimation>
            </div>
            <div className="singleservice__hero-image">
              <Image
                src={service.herosection.imgSrc}
                className="singleservice__hero-img"
                alt="singleservice__hero-img"
                loading="eager"
              />
            </div>
          </div>
          <div className="clientlogo-slider">
            <Clientlogoslider />
          </div>
        </div>
      </section>

      {/* Service content */}
      <section className="singleservice__approaches-section">
        <div className="container singleservice__approaches">
          <Easeanimation className="singleservice__approaches-content">
            <h4 className="singleservice__approaches-title text-xsmall text-fw-regular">
              {service.title}
            </h4>
            <h2 className="singleservice__approaches-subtitle text-large text-fw-medium">
              {service.approach_title}
            </h2>
          </Easeanimation>

          {service.approaches.map((approach, index) => {
            const isEven = index % 2 === 0;
            return (
              <>
                {isEven ? (
                  <div
                    className="singleservice__approach even-index"
                    key={approach.title}
                  >
                    <div className="single-service__approach-image">
                      <Image
                        src={approach.imgSrc}
                        className="single-service__approach-img"
                      />
                    </div>
                    <Easeanimation
                      delay={0.5}
                      staggerChildren={0.3}
                      className="single-service__approach-title-description "
                    >
                      <h3 className="single-service__approach-title text-h3 text-fw-medium">
                        {approach.title}
                      </h3>
                      <p className="single-service__approach-description text-xsmall text-fw-regular">
                        {approach.description[0]}
                        <br />
                        <br />
                        {approach.description[1]}
                      </p>
                    </Easeanimation>
                  </div>
                ) : (
                  <div
                    className="singleservice__approach odd-index"
                    key={approach.title}
                  >
                    <Easeanimation className="single-service__approach-title-description ">
                      <h3 className="single-service__approach-title text-h3 text-fw-medium">
                        {approach.title}
                      </h3>
                      <p className="single-service__approach-description text-xsmall text-fw-regular">
                        {approach.description[0]}
                        <br />
                        <br />
                        {approach.description[1]}
                      </p>
                    </Easeanimation>
                    <div className="single-service__approach-image">
                      <Image
                        src={approach.imgSrc}
                        className="single-service__approach-img"
                      />
                    </div>
                  </div>
                )}
              </>
            );
          })}

          <Ctabanner imgSrc={singleservicecta} />
        </div>
      </section>

      {/* Process section */}
      <section className="singleservice-processsection">
        <div className="container singleservice__process">
          <Easeanimation className="singleservice__process-content">
            <h4 className="singleservice__process-title text-xsmall text-fw-regular">
              OUR PROCESS
            </h4>
            <h2 className="singleservice__process-subtitle text-large text-fw-medium">
              Our process is agile, flexible and tailored to your needs
            </h2>
          </Easeanimation>

          <div className="process__timeline">
            <div className="process__timeline-content">
              {service.process_timeline.map((stage, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`process__timeline-item ${
                        activeStages.includes(index) ? "active" : ""
                      } `}
                      onClick={() => handleStepClick(index)}
                    >
                      <div className="progress">
                        <div className="progress_dot-inactive">
                          <Icons icon="progress_dot" />
                        </div>
                        <div className="progress_dot-active">
                          <Icons icon="progress_dot-active" />
                        </div>
                      </div>

                      <p
                        className={`text-xsmall text-fw-regular ${
                          index === currentStageIndex ? "underline" : ""
                        }`}
                      >
                        {" "}
                        {stage}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {activeStages.length && (
            <div className="process__stage">
              <Easeanimation className="process__stage-title-description">
                <h3 className="process__stage-title text-fw-medium text-h3">
                  {service.process[activeStages[activeStages.length - 1]].title}
                </h3>
                <p className="process__stage-description text-xsmall text-regular">
                  {
                    service.process[activeStages[activeStages.length - 1]]
                      .description
                  }
                </p>
              </Easeanimation>
              <div className="process__stage-image">
                <Image
                  src={
                    service.process[activeStages[activeStages.length - 1]]
                      .imgSrc
                  }
                  className="process__stage-img"
                  loading="eager"
                />
              </div>
            </div>
          )}

          <div className="process__accordians">
            {service.process.map((item, index) => (
              <div key={index} className="process__accordion">
                <div
                  className="accordion-question"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-medium text-fw-medium">
                    {index + 1}. {item.title}
                  </p>
                  {activeIndex === index ? (
                    <Icons icon="up_arrow" />
                  ) : (
                    <Icons icon="down_arrow" />
                  )}
                </div>
                <div
                  className={`accordion-answer ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <p className="accordion-answer__text text-xsmall text-fw-regular">
                    {item.description}
                  </p>
                  <div className="accordion-answer__image">
                    <Image
                      src={item.imgSrc}
                      className="accordion-answer__img"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service benefits */}
      <section className="servicebenefits-section">
        <div className="container servicebenefits">
          <div className="servicebenefits__heading-sticky">
            <Easeanimation className="servicebenefits__heading">
              <h4 className="servicebenefits__title text-xsmall text-fw-regular">
                BENEFITS
              </h4>
              <h2 className="servicebenefits__subtitle text-large text-fw-medium">
                How you can drive maximum value work with data.
              </h2>
            </Easeanimation>
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

export default SingleService;
