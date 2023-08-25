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

  return (
    <div className="container__partner-item">
      <div className="partner">
        <Heding
          title="ĐỐI TÁC"
          description="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới"
        />
        <div className="brand">
          <Swiper spaceBetween={30}>
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
