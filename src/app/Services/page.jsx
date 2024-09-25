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

function Services() {
  const accordions = [
    {
      question: "How do you use language processing to understand data?",
    },
    {
      question: "What kind of data can you analyze with your tools?",
    },
    {
      question: "How does a centralized data lake make analytics better?",
    },
    {
      question: "What does your ETL accelerator framework do?",
    },
    {
      question:
        "How can your AI systems help make smarter decisions for my business?",
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
              <Image src={Hero} loading="eager" className="service__hero-img" />
            </div>
          </div>
          <div className="client--logo"></div>
        </div>
      </section>

      {/* List of services */}
      <section className="service-list">
        <div className="container service__list">
          <div>
            <div></div>
            <div></div>
          </div>
          <Ctabanner imgSrc={servicecta} />
        </div>
      </section>

      <Whydk subtitle="Advanced domain expertise" imageSrc={WhydkServices} />
      <Successstories slicenum="2" />

      {/* Services FAQ */}
      <section className="service-faq__service">
        <div className="container service-faq">
          <div className="service-faq__content">
            <h4 className="service-faq__title">FAQs</h4>
            <h2 className="service-faq__subtitle">
              Clear answers to your complex questions
            </h2>
          </div>
          <div className="service-faq__accordions">
            {accordions.map((accordion) => {
              return (
                <>
                  <div className="service-faq__accordion">
                    <div className="service-faq__accordian-question">
                      <div className="accordian__question">
                        {accordion.question}
                      </div>
                      <div className="down__arrow">
                        <Icons icon="down_arrow" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Ctasection />
    </>
  );
}

export default Services;
