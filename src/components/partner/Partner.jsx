import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./partner.scss";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Heding from "../heading/Heding";

const Partner = () => {
  const data = [
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
  ];

  const breakpoints = {
    sx: 320,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1440,
  };

  return (
    <div className="container__partner-item">
      <div className="partner">
        <div className="wrapper__partner-heading">
          <Heding
            title="ĐỐI TÁC"
            description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
          />
        </div>
        <div className="brand">
          <Swiper
            breakpoints={{
              [breakpoints.xxl]: {
                slidesPerView: 6,
              },
              [breakpoints.xl]: {
                slidesPerView: 3,
              },
              [breakpoints.md]: {
                slidesPerView: 4,
              },
              [breakpoints.sm]: {
                slidesPerView: 2,
              },
              [breakpoints.sx]: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index} className="slide__wrapper">
                  <img src={item} alt="" className="slide__img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Partner;
