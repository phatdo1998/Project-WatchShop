import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./partner.scss";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Heding from "../heading/Heding";

const Partner = () => {
  const data = [
    "https://conteenium.com/wp-content/uploads/2020/11/250-Logo-AriesGold.jpg",
    "https://i.pinimg.com/originals/e7/f8/64/e7f8642fc5dd54f7d8495cacd8a41883.jpg",
    "https://donghominhnhat.vn/imagesys/images/Citizen_Watch-Logo_wine.png",
    "https://1000logos.net/wp-content/uploads/2018/02/Casio-logo.jpg",
    "https://donghoso1.vn/wp-content/uploads/2022/01/daniel-wellington-logo.jpg",
    "https://donghojackphan.vn/wp-content/uploads/2023/02/candino-watch-brand-review-logo-1.jpg",
    "https://15.ie/wp-content/uploads/2018/03/G-Shock-logo.png",
    "https://a.ipricegroup.com/brand/titan.jpg",
    "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2021/06/dong-ho-q-q-8-jpg-1623225113-09062021145153.jpg",
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
