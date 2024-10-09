"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";
import Testimonial from "@/components/Testimonial.jsx";
import Ctasection from "@/components/Ctasection.jsx";
import Whydk from "@/components/Whydk.jsx";
import Successstories from "@/components/Successstories.jsx";
import Herogif from "../assets/images/gif/herosection.png";
import Technologiesgif from "../assets/images/gif/technologies.png";
import Dataconsultation from "../assets/images/services/dataconsultation.png";
import Dataengineering from "../assets/images/services/dataengineering.png";
import Datascience from "../assets/images/services/datascience.png";
import Datavisualization from "../assets/images/services/datavisualization.png";
import Whydatakulture from "../assets/images/gif/whydatakulture.png";
import Clientlogoslider from "@/components/Clientlogoslider";
import Easeanimation from "@/components/Easeanimation.jsx";

export default function HomePage() {
  const ourServices = [
    {
      slug: "data-engineering",
      imgsrc: Dataengineering,
      title: "Data Engineering",
      description:
        "Designing systems to collect, store, transport and transform your data.",
    },
    {
      slug: "data-consulting",
      imgsrc: Dataconsultation,
      title: "Data consulting",
      description:
        "Understanding the purpose, value, and scale of your organization's data.",
    },
    {
      slug: "data-visualization",
      imgsrc: Datavisualization,
      title: "Data visualization",
      description:
        "Representing relationships and revealing hidden insights in your data.",
    },
    {
      slug: "data-science",
      imgsrc: Datascience,
      title: "Data science",
      description:
        " Leveraging AI and ML to unlock unprecedented business value.",
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="hero-section">
        <div className="container hero">
          <div className="hero__content-image">
            <div className="hero__content-text">
              <Easeanimation
                staggerChildren={0.2}
                className="hero-section__title-description"
              >
                <motion.div className="hero-section__title">
                  <h1 className="hero-section__title text-large text-fw-medium">
                    Start visualizing your business data with AI-driven insights
                  </h1>
                </motion.div>

                <motion.div className="hero-section__description text-small text-fw-regular">
                  <p>
                    Make informed decisions, drive growth, and stay ahead of the
                    competition by harnessing the full potential of your data
                    with our intuitive and intelligent solution.
                  </p>
                </motion.div>
              </Easeanimation>

              <Easeanimation
                delay={0.3}
                className="btn btn__primary btn__large hero-section__btn"
              >
                Contact us
              </Easeanimation>
            </div>

            <div className="hero-section__img">
              <Image
                className="hero-section__image"
                src={Herogif}
                alt="Hero section Image"
                loading="eager"
                width={648}
                height={648}
              />
            </div>
          </div>
          <div className=" clientlogo-slider">
            <Clientlogoslider />
          </div>
        </div>
      </section>

      {/* Our services */}
      <section className="our-services_section">
        <div className="container our-services">
          <Easeanimation className="our-services__content">
            <motion.h4 className="our-services__title">OUR SERVICES</motion.h4>
            <motion.h2 className="our-services__subtitle">
              Catalyzing your data journey
            </motion.h2>
          </Easeanimation>

          <Easeanimation staggerChildren={0.2} className="our-services__list">
            {ourServices.map((service) => {
              return (
                <>
                  <motion.div className="our-services__item">
                    <div className="our-services__item-content">
                      <Image
                        src={service.imgsrc}
                        alt={`${service.title} image`}
                        className="our-services__item-image"
                        width={96}
                        height={96}
                      />
                      <h3 className="our-services__item-title">
                        {service.title}
                      </h3>
                      <p className="our-services__item-description">
                        {service.description}
                      </p>
                    </div>
                    <div className="learn-more__btn">
                      <Link
                        href={`/services/${service.slug}`}
                        className="learn-more__btn-text"
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
      </section>

      <Whydk
        subtitle="Elevating data intelligence, together"
        imageSrc={Whydatakulture}
      />

      {/* Our technologies */}
      <section className="technologies__section">
        <Easeanimation staggerChildren={0.6} className="container technologies">
          <Easeanimation className="technologies__content">
            <h4 className="technologies__title text-xsmall  text-fw-regular">
              OUR TECHNOLOGIES
            </h4>
            <h2 className="technologies__description text-large  text-fw-medium">
              Empowering Innovations with leading-edge technologies
            </h2>
          </Easeanimation>
          <div className="technologies__image">
            <Image
              src={Technologiesgif}
              alt="Technologies GIF"
              className="technologies__img"
              width={874}
              height={392}
            />
          </div>
        </Easeanimation>
      </section>

      <Successstories />
      <Testimonial />
      <Ctasection />
    </>
  );
}
