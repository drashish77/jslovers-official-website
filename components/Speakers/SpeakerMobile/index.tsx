"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import data from "./data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SpeakerCard from "../SpeakerCard";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const SpeakerMobileCard = () => {
  const [hover, setHover] = useState(-1);
  const showHandler = (i: number) => {
    setHover(i);
  };

  const hideHandler = () => {
    setHover(-1);
  };
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {data.map((i) => (
          <SwiperSlide className="justify-center mb-10 px-10" key={i.id}>
            <SpeakerCard
              id={i.id}
              name={i.name}
              designation={i.designation}
              desc={i.desc}
              links={i.links}
              img={i.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpeakerMobileCard;
