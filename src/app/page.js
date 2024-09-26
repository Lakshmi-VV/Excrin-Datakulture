import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";
import Testimonial from "@/components/Testimonial.jsx";
import Ctasection from "@/components/Ctasection.jsx";
import Whydk from "@/components/Whydk.jsx";
import Successstories from "@/components/Successstories.jsx";
import Herogif from "../assets/images/gif/herosection.png";
import LT from "../assets/images/clientlogo/lt_logo.png";
import Raymond from "../assets/images/clientlogo/raymond_logo.png";
import Serum from "../assets/images/clientlogo/serum_institute_logo.png";
import IndianCements from "../assets/images/clientlogo/the_india_cements_logo.png";
import TigerAnalytics from "../assets/images/clientlogo/tiger_analytics_logo.png";
import TvsCredit from "../assets/images/clientlogo/tvs_credit_logo.png";
import Technologiesgif from "../assets/images/gif/technologies.png";
import Dataconsultation from "../assets/images/services/dataconsultation.png";
import Dataengineering from "../assets/images/services/dataengineering.png";
import Datascience from "../assets/images/services/datascience.png";
import Datavisualization from "../assets/images/services/datavisualization.png";
import Whydatakulture from "../assets/images/gif/whydatakulture.png";

export default function HomePage() {
  const ourServices = [
    {
      imgsrc: Dataengineering,
      title: "Data Engineering",
      description:
        "Designing systems to collect, store, transport and transform your data.",
    },
    {
      imgsrc: Dataconsultation,
      title: "Data consulting",
      description:
        "Understanding the purpose, value, and scale of your organization's data.",
    },
    {
      imgsrc: Datavisualization,
      title: "Data visualization",
      description:
        "Representing relationships and revealing hidden insights in your data.",
    },
    {
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
              <div className="hero-section__title-description">
                <div className="hero-section__title">
                  <h1 className="hero-section__title text-large  text-fw-medium">
                    Start visualizing your business data with AI-driven insights
                  </h1>
                </div>
                <div className="hero-section__description text-small  text-fw-regular">
                  <p>
                    Make informed decisions, drive growth, and stay ahead of the
                    competition by harnessing the full potential of your data
                    with our intuitive and intelligent solution.
                  </p>
                </div>
              </div>
              <button className="btn btn__primary btn__large hero-section__btn ">
                Contact us
              </button>
            </div>
            <div className="hero-section__img">
              <Image
                className="hero-section__image"
                src={Herogif}
                alt="Hero section Image"
                loading="eager"
              />
            </div>
          </div>
          <div className="client--logo"></div>
        </div>
      </section>

      {/* Our services */}
      <section className="our-services_section">
        <div className="container our-services">
          <div className="our-services__content">
            <h4 className="our-services__title">OUR SERVICES</h4>
            <h2 className="our-services__subtitle">
              Catalyzing your data journey
            </h2>
          </div>
          <div className="our-services__list">
            {ourServices.map((service) => {
              return (
                <>
                  <div className="our-services__item">
                    <div className="our-services__item-content">
                      <Image
                        src={service.imgsrc}
                        alt={`${service.title} image`}
                        className="our-services__item-image"
                      />
                      <h3 className="our-services__item-title">
                        {service.title}
                      </h3>
                      <p className="our-services__item-description">
                        {service.description}
                      </p>
                    </div>
                    <div className="learn-more__btn">
                      <Link href="/" className="learn-more__btn-text">
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
      </section>

      <Whydk
        subtitle="Elevating data intelligence, together"
        imageSrc={Whydatakulture}
      />

      {/* Our technologies */}
      <section className="technologies__section">
        <div className="container technologies">
          <div className="technologies__content">
            <h4 className="technologies__title text-xsmall  text-fw-regular">
              OUR TECHNOLOGIES
            </h4>
            <h2 className="technologies__description text-large  text-fw-medium">
              Empowering Innovations with leading-edge technologies
            </h2>
          </div>
          <Image
            src={Technologiesgif}
            className="technologies__image"
            alt="Technologies GIF"
          />
        </div>
      </section>

      <Successstories />
      <Testimonial />
      <Ctasection />
    </>
  );
}
