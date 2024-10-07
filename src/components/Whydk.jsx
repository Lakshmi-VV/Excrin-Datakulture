"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";
import Easeanimation from "@/components/Easeanimation.jsx";

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
          <Easeanimation
            staggerChildren={0.2}
            className="why-datakulture__header"
          >
            <motion.h4 className="why-datakulture__title text-xsmall text-fw-regular">
              WHY DATAKULTURE
            </motion.h4>
            <motion.h2 className="why-datakulture__subtitle text-large text-fw-medium">
              {subtitle}
            </motion.h2>
          </Easeanimation>

          <div className="why-datakulture__content">
            <Image
              src={imageSrc}
              alt="why-datakulture__image"
              className="why-datakulture__image"
            />

            <Easeanimation
              staggerChildren={0.5}
              className="why-datakulture__features"
            >
              {whydkFeatures.map((feature) => {
                return (
                  <>
                    <motion.div
                      staggerChildren={0.2}
                      className="why-datakulture__feature"
                    >
                      <h3 className="why-datakulture__feature-title text-h3 text-fw-medium">
                        {feature.title}
                      </h3>
                      <p className="why-datakulture__feature-description text-xsmall text-fw-regular">
                        {feature.description}
                      </p>
                      <div className="learn-more__btn">
                        <Link
                          href="/"
                          className="learn-more__btn-text text-small text-fw-medium"
                        >
                          Learn more
                        </Link>
                        <Icons
                          icon="right_arrow"
                          className="learn-more__btn-icon"
                        />
                      </div>
                    </motion.div>
                  </>
                );
              })}
            </Easeanimation>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whydk;
