"use client";
import Successstories from "@/components/Successstories";
import Whydk from "@/components/Whydk";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import WhydkServices from "@/assets/images/gif/whydk_services.png";
import Ctasection from "@/components/Ctasection";
import { Icons } from "@/components/Icons";
import Hero from "@/assets/images/gif/herosection_services.png";
import Ctabanner from "@/components/Ctabanner";
import servicecta from "@/assets/images/ctabanner/ctabanner_services.png";
import Dataconsultation from "@/assets/images/services/dataconsultation.png";
import Dataengineering from "@/assets/images/services/dataengineering.png";
import Datascience from "@/assets/images/services/datascience.png";
import Datavisualization from "@/assets/images/services/datavisualization.png";
import Link from "next/link";
import Clientlogoslider from "@/components/Clientlogoslider";
import Servicefaq from "@/components/Servicefaq";
import Easeanimation from "@/components/Easeanimation";

function Services() {
  const [activeService, setActiveService] = useState();
  const services = useRef([]);

  const servicesgrp = [
    {
      slug: "data-engineering",
      imgSrc: Dataengineering,
      title: "Data Engineering",
      subservices: [
        "Data discovery",
        "Data architecture",
        "Data modeling",
        "Data profiling",
        "Data pipeline",
        "Data LakeHouse",
        "Data warehouse modernization",
        "Data governance",
      ],
      description:
        "Data engineering services involve the design, development, deployment, and maintenance of data infrastructure and systems to support the processing, storage, and analysis of large volumes of data. Data consulting services may cover a wide range of areas, including data governance, data quality management, data integration, data analytics, and data visualization.",
    },
    {
      slug: "data-consulting",
      imgSrc: Dataconsultation,
      title: "Data consulting",
      subservices: [
        "Data strategy assessment",
        "Data maturity model",
        "Data science readiness",
        "Data framework",
        "Data & analytics roadmap",
        "Partnership for training& innovation",
      ],
      description:
        "Data consulting services provide expert advice and guidance to organizations on how to leverage their data assets for better decision-making and business outcomes.Data consulting services may cover a wide range of areas, including data governance, data quality management, data integration, data analytics, and data visualization.",
    },
    {
      slug: "data-visualization",
      imgSrc: Datavisualization,
      title: "Data visualization",
      subservices: [
        "UX-driven data visualization",
        "Metrics that matter",
        "Data-driven storytelling",
        "Modernizing data visualization strategies",
        "Tailored embedded solutions",
      ],
      description:
        "Data engineering services involve the design, development, deployment, and maintenance of data infrastructure and systems to support the processing, storage, and analysis of large volumes of data. Data consulting services may cover a wide range of areas, including data governance, data quality management, data integration, data analytics, and data visualization.",
    },
    {
      slug: "data-science",
      imgSrc: Datascience,
      title: "Data science",
      subservices: [
        "Machine learning",
        "Decision sciences",
        "MLops",
        "Deep learning",
        "Generative AI",
      ],
      description:
        "Data science services involve the use of advanced analytics and machine learning techniques to extract insights and knowledge from data.Data science services may include data exploration and visualization, predictive modeling, statistical analysis, natural language processing, and deep learning.",
    },
  ];

  useEffect(() => {
    const allServices = document.querySelectorAll(".singleservice__content");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(entry.target.id);
          }
        });
      },
      { threshold: 1 }
    );
    allServices.forEach((service) => observer.observe(service));
  }, []);

  return (
    <>
      {/* Service hero section */}
      <section className="service-herosection">
        <div className="container service__hero">
          <div className="service__hero-content-image">
            <Easeanimation
              staggerChildren={0.4}
              className="service__hero-content"
            >
              <h4 className="service__hero-content-title">Services</h4>
              <h2 className="service__hero-content-subtitle">
                Our data and analytics consulting services
              </h2>
              <p className="service__hero-content-description">
                Providing end to end solutions by analyzing data is our forte!
              </p>
            </Easeanimation>
            <div className="service__hero-image">
              <Image
                src={Hero}
                loading="eager"
                className="service__hero-img"
                alt="service-hero image"
                width={642}
                height={464}
              />
            </div>
          </div>
          <div className=" clientlogo-slider">
            <Clientlogoslider />
          </div>
        </div>
      </section>

      {/* List of services */}
      <section className="service-list-section">
        <div className="container service__list">
          <div className="service__list-navigation-servicegrp">
            <div className="service__list-navigation-sticky">
              <div className="service__list-navigation">
                {servicesgrp.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className={`service__list-navtext text-xsmall text-fw-regular ${
                        activeService === `service-${index}` ? "active" : ""
                      }`}
                      onClick={() => {
                        document
                          .getElementById(`service-${index}`)
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {service.title}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="service__list-servicegrp">
              {servicesgrp.map((singleservice, index) => {
                return (
                  <>
                    <div
                      staggerChildren={0.3}
                      delay={0.2}
                      className="singleservice__content"
                      id={`service-${index}`}
                      ref={(el) => (services.current[index] = el)}
                      key={index}
                    >
                      <div className="singleservice__title-image">
                        <Easeanimation className="singleservice-image">
                          <Image
                            src={singleservice.imgSrc}
                            className="singleservice-img"
                            alt={singleservice.title}
                            width={96}
                            height={96}
                          />
                        </Easeanimation>
                        <Easeanimation>
                          <h3 className="singleservice-title text-fw-medium text-h2">
                            {singleservice.title}
                          </h3>
                        </Easeanimation>
                      </div>
                      <Easeanimation
                        staggerChildren={0.1}
                        className="singleservice-subservices"
                      >
                        {singleservice.subservices.map((service) => {
                          return (
                            <>
                              <div className="singleservice-subservice">
                                <Link
                                  href="/"
                                  className="singleservice-subservice__text text-fw-medium text-xxsmall"
                                >
                                  {service}
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </Easeanimation>
                      <Easeanimation
                        delay={0.3}
                        className="singleservice-description text-small text-fw-regular"
                      >
                        <p>{singleservice.description}</p>
                      </Easeanimation>
                      <Easeanimation delay={0.4} className="singleservice-btn">
                        <Link
                          className="btn btn__primary btn__medium"
                          href={`/services/${singleservice.slug}`}
                        >
                          Learn more
                        </Link>
                      </Easeanimation>
                    </div>

                    {index !== servicesgrp.length - 1 && (
                      <div className="horizontal-line"></div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <Ctabanner imgSrc={servicecta} />
        </div>
      </section>

      <Whydk subtitle="Advanced domain expertise" imageSrc={WhydkServices} />
      <Successstories slicenum="2" />

      <Servicefaq />

      <Ctasection />
    </>
  );
}

export default Services;
