"use client";
import Successstories from "@/components/Successstories";
import Whydk from "@/components/Whydk";
import React from "react";
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
import { useRouter } from "next/navigation";
import Servicefaq from "@/components/Servicefaq";

function Services() {
  const router = useRouter();

  const servicesgrp = [
    {
      id: "data-engineering",
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
      id: "data-consulting",
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
      id: "data-visualization",
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
      id: "data-science",
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
  return (
    <>
      {/* Service hero section */}
      <section className="service-herosection">
        <div className="container service__hero">
          <div className="service__hero-content-image">
            <div className="service__hero-content">
              <h4 className="service__hero-content-title">Services</h4>
              <h2 className="service__hero-content-subtitle">
                Our data and analytics consulting services
              </h2>
              <p className="service__hero-content-description">
                Providing end to end solutions by analyzing data is our forte!
              </p>
            </div>
            <div className="service__hero-image">
              <Image
                src={Hero}
                loading="eager"
                className="service__hero-img"
                alt="service-hero image"
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
                      className="service__list-navtext text-xsmall text-fw-regular"
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
                      className="singleservice__content"
                      id={`service-${index}`}
                    >
                      <div className="singleservice__title-image">
                        <div className="singleservice-image">
                          <Image
                            src={singleservice.imgSrc}
                            className="singleservice-img"
                            alt={singleservice.title}
                          />
                        </div>
                        <div>
                          <h3 className="singleservice-title text-fw-medium text-h2">
                            {singleservice.title}
                          </h3>
                        </div>
                      </div>
                      <div className="singleservice-subservices">
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
                      </div>
                      <div className="singleservice-description text-small text-fw-regular">
                        <p>{singleservice.description}</p>
                      </div>
                      <div className="singleservice-btn">
                        {/* <button
                          className="btn btn__primary btn__medium"
                          onClick={() =>
                            router.push(`/services/${singleservice.id}`)
                          }
                        >
                          Learn more
                        </button> */}
                        <Link
                          className="btn btn__primary btn__medium"
                          href={`/services/${singleservice.id}`}
                        >
                          Learn more
                        </Link>
                      </div>
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
