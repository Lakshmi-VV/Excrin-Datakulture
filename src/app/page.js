import Image from "next/image";
import Herogif from "../assets/gif/herosection.png";
import LT from "../assets/clientlogo/lt_logo.png";
import Raymond from "../assets/clientlogo/raymond_logo.png";
import Serum from "../assets/clientlogo/serum_institute_logo.png";
import IndianCements from "../assets/clientlogo/the_india_cements_logo.png";
import TigerAnalytics from "../assets/clientlogo/tiger_analytics_logo.png";
import TvsCredit from "../assets/clientlogo/tvs_credit_logo.png";
import Technologiesgif from "../assets/gif/technologies.png";
import Ctasection from "../assets/gif/ctasection.png";
import Whydatakulture from "../assets/gif/whydatakulture.png";
import { Icons } from "../assets/Icons.jsx";
import Dataconsultation from "../assets/gif/dataconsultation.png";
import Dataengineering from "../assets/gif/dataengineering.png";
import Datascience from "../assets/gif/datascience.png";
import Datavisualization from "../assets/gif/datavisualization.png";
import Gold from "../assets/partnerlogo/microsoftgold.png";
import Tableau from "../assets/partnerlogo/tableau.png";
import Azure from "../assets/partnerlogo/azure.png";
import Aws from "../assets/partnerlogo/aws.png";
import TestimonialPattern from "../assets/gif/testimonalpattern.png";
import Client from "../assets/clientimg.png";
import TestimonialHorizontal from "../assets/gif/testimonialhorizontal.png";
import Transitflow from "../assets/successstory/transitflow.png";
import Automation from "../assets/successstory/automation.png";
import Seacraft from "../assets/successstory/seacraft.png";
import Ella from "../assets/successstory/ella.png";

export default function HomePage() {
  return (
    <>
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
            <div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <Image
                    src={Dataengineering}
                    alt="dataengineering image"
                    className="our-services__item-image"
                  />
                  <h3 className="our-services__item-title">Data Engineering</h3>
                  <p className="our-services__item-description">
                    Designing systems to collect, store, transport and transform
                    your data.
                  </p>
                </div>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <Image
                    src={Dataconsultation}
                    alt="Data consulting image"
                    className="our-services__item-image"
                  />
                  <h3 className="our-services__item-title">Data consulting</h3>
                  <p className="our-services__item-description">
                    {`Understanding the purpose, value, and scale of your
                    organization's data.`}
                  </p>
                </div>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <Image
                    src={Datavisualization}
                    alt="Data visualization image"
                    className="our-services__item-image"
                  />
                  <h3 className="our-services__item-title">
                    Data visualization
                  </h3>
                  <p className="our-services__item-description">
                    Representing relationships and revealing hidden insights in
                    your data.
                  </p>
                </div>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <Image
                    src={Datascience}
                    alt="Data science image"
                    className="our-services__item-image"
                  />
                  <h3 className="our-services__item-title">Data science</h3>
                  <p className="our-services__item-description">
                    Leveraging AI and ML to unlock unprecedented business value.
                  </p>
                </div>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why datakulture */}
      <section className="why-datakulture__section">
        <div className="container why-datakulture">
          <div className="why-datakulture__header">
            <h4 className="why-datakulture__title">WHY DATAKULTURE</h4>
            <h2 className="why-datakulture__subtitle">
              Elevating data intelligence, together
            </h2>
          </div>
          <div className="why-datakulture__content">
            <Image
              src={Whydatakulture}
              className="why-datakulture__image"
              alt="why-datakulture__image"
            />
            <div className="why-datakulture__features">
              <div className="why-datakulture__feature">
                <h3 className="why-datakulture__feature-title">
                  Decades of experience
                </h3>
                <p className="why-datakulture__feature-description">
                  With over 15 years of experience, Datakulture delivers
                  high-quality, tailored solutions using diverse data sets and
                  analytics tools, meeting specific client needs.
                </p>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
              <div className="why-datakulture__feature">
                <h3 className="why-datakulture__feature-title">
                  Advanced domain expertise
                </h3>
                <p className="why-datakulture__feature-description">
                  {`Providing global data analytics services for over 15 years, we
                demonstrate commitment and expertise in delivering quality
                solutions tailored to our clients' unique needs.`}
                </p>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
              <div className="why-datakulture__feature">
                <h3 className="why-datakulture__feature-title">
                  Strategic technology partnerships
                </h3>
                <p className="why-datakulture__feature-description">
                  Strategic tech partnerships are collaborations between
                  companies to create, integrate, or market new tech solutions.
                  They leverage mutual strengths, share resources and expertise,
                  and boost innovation and growth.
                </p>
                <div className="learn-more__btn">
                  <a className="learn-more__btn-text">Learn more</a>
                  <Icons icon="right_arrow" className="learn-more__btn-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our technologies */}
      <section className="technologies__section">
        <div className="container technologies">
          <div className="technologies__content">
            <h4 className="technologies__title">OUR TECHNOLOGIES</h4>
            <h2 className="technologies__description">
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

      {/* Success stories */}
      <section className="Successstories__section">
        <div className="container success-stories">
          <div className="success-stories__content">
            <h4 className="success-stories__title">OUR SUCCESS STORIES</h4>
            <h2 className="success-stories__subtitle">
              Transformative solutions, real-world impact
            </h2>
          </div>

          <div className="success-stories__cards">
            <div className="success-stories__card">
              <div className="card__img">
                <Image src={Transitflow} className="card__image" />
              </div>
              <div className="card__content-btn">
                <div className="card__content">
                  <a className="card__content-title">
                    Preparing data warehouse for leading third-party logistics
                    (3PL) provider
                  </a>
                  <p className="card__content-description">
                    Enabling near real-time data analysis, automating the ETL
                    process with audit and error tracking, and providing a
                    detailed dashboard.
                  </p>
                </div>
                <div className="card__btn">
                  <div className="view__btn">
                    <a className="view__btn-text">View case study</a>
                    <Icons icon="right_arrow" className="view__btn-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="success-stories__card">
              <div className="card__img">
                <Image src={Automation} className="card__image" />
              </div>
              <div className="card__content-btn">
                <div className="card__content">
                  <a className="card__content-title">
                    Helped major tool manufacturer in USA query response time to
                    be 10x faster
                  </a>
                  <p className="card__content-description">
                    Enabling near real-time data analysis, automating the ETL
                    process with audit and error tracking, and providing a
                    detailed dashboard.
                  </p>
                </div>
                <div className="card__btn">
                  <div className="view__btn">
                    <a className="view__btn-text">View case study</a>
                    <Icons icon="right_arrow" className="view__btn-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="success-stories__card">
              <div className="card__img">
                <Image src={Ella} className="card__image" />
              </div>
              <div className="card__content-btn">
                <div className="card__content">
                  <a className="card__content-title">
                    Enhanced data visualization for a leading jewellery
                    insurance company
                  </a>
                  <p className="card__content-description">
                    Enabling near real-time data analysis, automating the ETL
                    process with audit and error tracking, and providing a
                    detailed dashboard.
                  </p>
                </div>
                <div className="card__btn">
                  <div className="view__btn">
                    <a className="view__btn-text">View case study</a>
                    <Icons icon="right_arrow" className="view__btn-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="success-stories__card">
              <div className="card__img">
                <Image src={Seacraft} className="card__image" />
              </div>
              <div className="card__content-btn">
                <div className="card__content">
                  <a className="card__content-title">
                    Provided superior inventory management for leading
                    shipbuilder in India
                  </a>
                  <p className="card__content-description">
                    Enabling near real-time data analysis, automating the ETL
                    process with audit and error tracking, and providing a
                    detailed dashboard.
                  </p>
                </div>
                <div className="card__btn">
                  <div className="view__btn">
                    <a className="view__btn-text">View case study</a>
                    <Icons icon="right_arrow" className="view__btn-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn__outlined-black btn__medium load-more-btn">
            Load more
          </button>
        </div>
      </section>

      {/* Testimonial */}
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
                <a className="testimonial__arrow">
                  <Icons icon="left_arrow" width={24} height={24} />
                </a>
                <a className="testimonial__arrow">
                  <Icons icon="right_arrow" width={24} height={24} />
                </a>
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
              <div className="testimonial__client-text">
                <div>
                  <p className="client__review">
                    {`
                    We were really impressed with their service orientation and
                    understanding of our business. Showcasing expertise in data
                    engineering, Datakulture was successful in implementing the
                    dashboard, allowing the client to track their KPIs and make
                    data-driven decisions. The team's solid understanding of the
                    client's business and their needs was critical to the
                    project's success.`}
                  </p>
                </div>
                <div className="client__info">
                  <Image
                    src={Client}
                    alt="client image"
                    className="client_image"
                  />
                  <div className="client__name-company">
                    <p className="client-name">Biswajit Rath</p>
                    <p className="client-company">
                      Head of Analytics, Raymond Limited.
                    </p>
                  </div>
                  <div className="testimonal__arrows-mob">
                    <a>
                      <Icons icon="left_arrow" width={24} height={24} />
                    </a>
                    <a>
                      <Icons icon="right_arrow" width={24} height={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="partnership">
            <div className="partnership__text">
              <p>We have Implemented 250+ Projects in Partnership with</p>
            </div>
            <div className="partners">
              <div className="partner">
                <Image
                  src={Gold}
                  className="microsoft-gold-partner"
                  alt="microsoft-gold-partner"
                />
              </div>
              <div className="partner">
                <Image
                  src={Tableau}
                  className="Tableau-partner"
                  alt="Tableau-partner"
                />
              </div>
              <div className="partner">
                <Image src={Aws} className="Aws-partner" alt="Aws-partner" />
              </div>
              <div className="partner">
                <Image
                  src={Azure}
                  className="Azure-partner"
                  alt="Azure-partner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-section__content-btn">
            <div className="cta-section__content">
              <h2 className="cta-section__title">
                {`Let's build your data culture together`}
              </h2>
              <p className="cta-section__description">
                Talk to a Datakulture consultant today.
              </p>
            </div>
            <a className="btn btn__secondary btn__large cta-section__btn">
              Contact us
            </a>
          </div>

          <Image
            src={Ctasection}
            className="cta-section__image"
            alt="cta section image"
          />
        </div>
      </section>
    </>

    //   {/* Hero section */}
    //   <section className="hero-section">
    //     <div className="hero-section__title-description">
    //       <div className="hero-section__title">
    //         <p>Start visualizing your business data with AI-driven insights</p>
    //       </div>
    //       <div className="hero-section__description">
    //         <p>
    //           Make informed decisions, drive growth, and stay ahead of the
    //           competition by harnessing the full potential of your data with our
    //           intuitive and intelligent solution.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="hero-section__btn-image">
    //       <button className="btn btn__primary btn__large hero-section__button ">
    //         Contact us
    //       </button>
    //       <Image
    //         className="hero-section__image"
    //         src={Herogif}
    //         alt="Hero section Image"
    //       />
    //     </div>
    //     <div className="client-logo">
    //       <div className="client-logo__slider">
    //         <div className="client-logo__slider-images">
    //           <Image src={LT} alt="LT Logo" className="client-logo__image" />
    //           <Image
    //             src={Serum}
    //             alt="Serum Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={TigerAnalytics}
    //             alt="Tiger Analytics Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={TvsCredit}
    //             alt="TVS Credit Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={IndianCements}
    //             alt="Indian Cements Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={Raymond}
    //             alt="Raymond Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={TvsCredit}
    //             alt="TVS Credit Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={IndianCements}
    //             alt="Indian Cements Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={Raymond}
    //             alt="Raymond Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={Serum}
    //             alt="Serum Logo"
    //             className="client-logo__image"
    //           />
    //         </div>
    //         <div className="client-logo__slider-images">
    //           <Image src={LT} alt="LT Logo" className="client-logo__image" />
    //           <Image
    //             src={Serum}
    //             alt="Serum Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={TigerAnalytics}
    //             alt="Tiger Analytics Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={TvsCredit}
    //             alt="TVS Credit Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={IndianCements}
    //             alt="Indian Cements Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={Raymond}
    //             alt="Raymond Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={TvsCredit}
    //             alt="TVS Credit Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={IndianCements}
    //             alt="Indian Cements Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={Raymond}
    //             alt="Raymond Logo"
    //             className="client-logo__image"
    //           />
    //           <Image
    //             src={Serum}
    //             alt="Serum Logo"
    //             className="client-logo__image"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
  );
}
