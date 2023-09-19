import React from "react";
import "./slide.scss";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../../data";
import { EffectCoverflow } from "swiper/modules";

const Slide = () => {
  const breakpoints = {
    sx: 320,
    sm: 425,
    md: 650,
    lg: 768,
    xl: 1024,
    xxl: 1440,
  };

  return (
    <div className="container ">
      <Swiper
        breakpoints={{
          [breakpoints.xxl]: {
            slidesPerView: 1,
          },
          [breakpoints.xl]: {
            slidesPerView: 1,
          },
          [breakpoints.lg]: {
            slidesPerView: 1,
          },
          [breakpoints.md]: {
            slidesPerView: 1,
          },
          [breakpoints.sm]: {
            slidesPerView: 1,
          },
          [breakpoints.sx]: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={2}
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a className="wrapper__slide-img" href="/">
                <img src={item.image} alt="" className="slide__img" />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slide;
