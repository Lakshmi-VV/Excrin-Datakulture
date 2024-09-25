import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../components/Icons.jsx";
import Transitflow from "../assets/images/successstory/transitflow.png";
import Automation from "../assets/images/successstory/automation.png";
import Seacraft from "../assets/images/successstory/seacraft.png";
import Ella from "../assets/images/successstory/ella.png";

function Successstories({ slicenum }) {
  const successStoriesCard = [
    {
      card: 1,
      imgSrc: Transitflow,
      title:
        "Preparing data warehouse for leading third-party logistics (3PL) provider",
      description:
        "Enabling near real-time data analysis, automating the ETL process with audit and error tracking, and providing a detailed dashboard.",
    },
    {
      card: 2,
      imgSrc: Automation,
      title:
        " Helped major tool manufacturer in USA query response time to be 10x faster",
      description:
        " Enabling near real-time data analysis, automating the ETL process with audit and error tracking, and providing a detailed dashboard.",
    },
    {
      card: 3,
      imgSrc: Ella,
      title:
        "Enhanced data visualization for a leading jewellery insurance company",
      description:
        " Enabling near real-time data analysis, automating the ETL process with audit and error tracking, and providing a detailed dashboard.",
    },
    {
      card: 4,
      imgSrc: Seacraft,
      title:
        " Provided superior inventory management for leading shipbuilder in India",
      description:
        " Enabling near real-time data analysis, automating the ETL process with audit and error tracking, and providing a detailed dashboard.",
    },
  ];
  return (
    <>
      <section className="Successstories__section">
        <div className="container success-stories">
          <div className="success-stories__content">
            <h4 className="success-stories__title">OUR SUCCESS STORIES</h4>
            <h2 className="success-stories__subtitle">
              Transformative solutions, real-world impact
            </h2>
          </div>

          <div className="success-stories__cards">
            {successStoriesCard.slice(0, slicenum).map((card) => {
              return (
                <>
                  <div className="success-stories__card">
                    <div className="card__img">
                      <Image
                        src={card.imgSrc}
                        className="card__image"
                        alt="card image"
                      />
                    </div>
                    <div className="card__content-btn">
                      <div className="card__content">
                        <h3 className="card__content-title">{card.title}</h3>
                        <p className="card__content-description">
                          {card.description}
                        </p>
                      </div>
                      <div className="card__btn">
                        <div className="view__btn">
                          <Link href="/" className="view__btn-text">
                            View case study
                          </Link>
                          <Icons
                            icon="right_arrow"
                            className="view__btn-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <button className="btn btn__outlined-black btn__medium load-more-btn">
            Load more
          </button>
        </div>
      </section>
    </>
  );
}

export default Successstories;
