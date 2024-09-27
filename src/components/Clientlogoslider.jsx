"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import LT from "../assets/images/clientlogo/lt_logo.png";
import Raymond from "../assets/images/clientlogo/raymond_logo.png";
import Serum from "../assets/images/clientlogo/serum_institute_logo.png";
import IndianCements from "../assets/images/clientlogo/the_india_cements_logo.png";
import TigerAnalytics from "../assets/images/clientlogo/tiger_analytics_logo.png";
import TvsCredit from "../assets/images/clientlogo/tvs_credit_logo.png";

function Clientlogoslider() {
  const clientLogo = [
    {
      name: "LT",
      imgSrc: LT,
    },
    {
      name: "Serum",
      imgSrc: Serum,
    },
    {
      name: "Tiger Analytics",
      imgSrc: TigerAnalytics,
    },
    {
      name: "Tvs Credit",
      imgSrc: TvsCredit,
    },
    {
      name: "Indian Cements",
      imgSrc: IndianCements,
    },
    {
      name: "Raymond",
      imgSrc: Raymond,
    },
    {
      name: "Tvs Credit",
      imgSrc: TvsCredit,
    },
    {
      name: "Indian Cements",
      imgSrc: IndianCements,
    },
    {
      name: "Raymond",
      imgSrc: Raymond,
    },
  ];
  return (
    <div className=" client-logo__slider">
      <Swiper
        slidesPerView={2}
        spaceBetween={49}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
      >
        {clientLogo.map((logo) => {
          return (
            <SwiperSlide>
              <div className="client-logo__img">
                <Image
                  src={logo.imgSrc}
                  alt={logo.name}
                  className="client-logo__image"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Clientlogoslider;
