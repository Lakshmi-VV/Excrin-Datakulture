import Image from "next/image";
import Herogif from "../assets/gif/herosection.png";
import LT from "../assets/clientlogo/lt.png";
import Raymond from "../assets/clientlogo/raymond_logo.png";
import Serum from "../assets/clientlogo/serum_institute_logo.png";
import IndianCements from "../assets/clientlogo/the_india_cements_logo.png";
import TigerAnalytics from "../assets/clientlogo/tiger_analytics_logo.png";
import TvsCredit from "../assets/clientlogo/tvs_credit_logo.png";
import Technologiesgif from "../assets/gif/technologies.png";
import Ctasection from "../assets/gif/ctasection.png";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section__title-description">
          <div className="hero-section__title">
            <p>Start visualizing your business data with AI-driven insights</p>
          </div>
          <div className="hero-section__description">
            <p>
              Make informed decisions, drive growth, and stay ahead of the
              competition by harnessing the full potential of your data with our
              intuitive and intelligent solution.
            </p>
          </div>
        </div>

        <div className="hero-section__button-image">
          <button className="hero-section__button">Contact us</button>
          <Image
            className="hero-section__image"
            src={Herogif}
            alt="Hero section Image"
          />
        </div>
        <div className="client-logo">
          <div className="client-logo__slider">
            <div className="client-logo__slider-images">
              <Image src={LT} alt="LT Logo" className="client-logo__image" />
              <Image
                src={Serum}
                alt="Serum Logo"
                className="client-logo__image"
              />
              <Image
                src={TigerAnalytics}
                alt="Tiger Analytics Logo"
                className="client-logo__image"
              />
              <Image
                src={TvsCredit}
                alt="TVS Credit Logo"
                className="client-logo__image"
              />
              <Image
                src={IndianCements}
                alt="Indian Cements Logo"
                className="client-logo__image"
              />
              <Image
                src={Raymond}
                alt="Raymond Logo"
                className="client-logo__image"
              />
              <Image
                src={TvsCredit}
                alt="TVS Credit Logo"
                className="client-logo__image"
              />
              <Image
                src={IndianCements}
                alt="Indian Cements Logo"
                className="client-logo__image"
              />
              <Image
                src={Raymond}
                alt="Raymond Logo"
                className="client-logo__image"
              />
              <Image
                src={Serum}
                alt="Serum Logo"
                className="client-logo__image"
              />
            </div>
            <div className="client-logo__slider-images">
              <Image src={LT} alt="LT Logo" className="client-logo__image" />
              <Image
                src={Serum}
                alt="Serum Logo"
                className="client-logo__image"
              />
              <Image
                src={TigerAnalytics}
                alt="Tiger Analytics Logo"
                className="client-logo__image"
              />
              <Image
                src={TvsCredit}
                alt="TVS Credit Logo"
                className="client-logo__image"
              />
              <Image
                src={IndianCements}
                alt="Indian Cements Logo"
                className="client-logo__image"
              />
              <Image
                src={Raymond}
                alt="Raymond Logo"
                className="client-logo__image"
              />
              <Image
                src={TvsCredit}
                alt="TVS Credit Logo"
                className="client-logo__image"
              />
              <Image
                src={IndianCements}
                alt="Indian Cements Logo"
                className="client-logo__image"
              />
              <Image
                src={Raymond}
                alt="Raymond Logo"
                className="client-logo__image"
              />
              <Image
                src={Serum}
                alt="Serum Logo"
                className="client-logo__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="technologies__content">
          <p className="technologies__title">OUR TECHNOLOGIES</p>
          <p className="technologies__description">
            Empowering Innovations with leading-edge technologies
          </p>
        </div>
        <Image
          src={Technologiesgif}
          className="technologies__image"
          alt="Technologies GIF"
        />
      </section>

      <section className="cta-section">
        <div className="cta-section__content">
          <p className="cta-section__title">
            Lets build your data culture together
          </p>
          <p className="cta-section__description">
            Talk to a Datakulture consultant today.
          </p>
          <button className="cta-section__button">Contact us</button>
        </div>
        <Image
          src={Ctasection}
          className="cta-section__image"
          alt="cta section image"
        />
      </section>

      <Footer />
    </>
  );
}
