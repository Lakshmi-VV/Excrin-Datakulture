import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";

function Whydk({ subtitle, imageSrc }) {
  const whydkFeatures = [
    {
      id: 1,
      title: " Decades of experience",
      description:
        "With over 15 years of experience, Datakulture delivers high-quality, tailored solutions using diverse data sets and analytics tools, meeting specific client needs.",
    },
    {
      id: 2,
      title: " Advanced domain expertise",
      description:
        "Providing global data analytics services for over 15 years, we demonstrate commitment and expertise in delivering quality solutions tailored to our clients' unique needs.",
    },
    {
      id: 3,
      title: "Strategic technology partnerships",
      description:
        "Strategic tech partnerships are collaborations between companies to create, integrate, or market new tech solutions. They leverage mutual strengths, share resources and expertise, and boost innovation and growth.",
    },
  ];
  return (
    <>
      <section className="why-datakulture__section">
        <div className="container why-datakulture">
          <div className="why-datakulture__header">
            <h4 className="why-datakulture__title text-xsmall">
              WHY DATAKULTURE
            </h4>
            <h2 className="why-datakulture__subtitle text-large">{subtitle}</h2>
          </div>
          <div className="why-datakulture__content">
            <Image
              src={imageSrc}
              className="why-datakulture__image"
              alt="why-datakulture__image"
            />
            <div className="why-datakulture__features">
              {whydkFeatures.map((feature) => {
                return (
                  <>
                    <div className="why-datakulture__feature">
                      <h3 className="why-datakulture__feature-title text-h3">
                        {feature.title}
                      </h3>
                      <p className="why-datakulture__feature-description text-xsmall">
                        {feature.description}
                      </p>
                      <div className="learn-more__btn">
                        <Link
                          href="/"
                          className="learn-more__btn-text text-small"
                        >
                          Learn more
                        </Link>
                        <Icons
                          icon="right_arrow"
                          className="learn-more__btn-icon"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whydk;
