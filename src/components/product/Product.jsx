/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Heading from "../heading/Heding";
import { data, newProduct } from "../../data";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import "./product.scss";
import { Navigation, Autoplay } from "swiper/modules";

const Product = () => {
  const [selected, setSelected] = useState(0);
  const handleClick = (index) => {
    setSelected(index);
  };

  const breakpoints = {
    sx: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1440,
  };
  return (
    <div className="wrapper__product">
      <div className="wrapper__product-item ">
        <div className="wrapper__product-heading">
          <Heading
            title={"SẢN PHẨM THEO DANH MỤC"}
            description={
              "Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhập về phục vụ quý khách hàng"
            }
          />
        </div>

        <div className="container__watch">
          {data.map((item, index) => {
            return (
              <div
                onClick={() => handleClick(index)}
                key={index}
                className="watch"
              >
                <a
                  className={`watch__link ${
                    selected === index ? "active" : "inactive"
                  }`}
                >
                  <img src={item.image} alt="" className="watch__img" />
                  <div className="watch__name">{item.name}</div>
                </a>
              </div>
            );
          })}
        </div>
        <div className="container__list-watch">
          <div className="list__watch">
            {data[selected].items.map((item, index) => {
              return (
                <div key={index} className="list__watch--wrapper">
                  <a href="" className="list__watch--wrapper-image">
                    <img src={s6} alt="" className="list__watch--image" />
                  </a>
                  <div className="list__watch--name">
                    <a href="/detail" className="" title="Apple Watch Series 6">
                      {item.name}
                    </a>
                  </div>
                  <div className="list__watch--price">{item.price}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="wrapper__new--product">
          <div className="wrapper__heading--product">
            <Heading
              title={"SẢN PHẨM MỚI"}
              description={
                "Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh"
              }
            />
          </div>
          <div className="wrapper__slide">
            <div className="wrapper__slide--content">
              <div className="wrapper__slide-icon-left">
                <AiOutlineLeft size={20} />
              </div>
              <div className="wrapper__slide-icon-right">
                <AiOutlineRight size={20} />
              </div>
              <Swiper
                breakpoints={{
                  [breakpoints.xxl]: {
                    slidesPerView: 3,
                  },
                  [breakpoints.xl]: {
                    slidesPerView: 3,
                  },
                  [breakpoints.md]: {
                    slidesPerView: 2,
                  },
                  [breakpoints.sm]: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={{
                  delay: 3000,
                }}
                slidesPerView={2}
                navigation={{
                  nextEl: ".wrapper__slide-icon-right",
                  prevEl: ".wrapper__slide-icon-left",
                }}
                modules={[Navigation, Autoplay]}
              >
                {newProduct.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div key={index} className="wrapper__slide-wrapper">
                        <a href="" className="wrapper__slide-link">
                          <img src={s6} alt="" className="list__slide-image" />
                        </a>
                        <div className="wrapper__slide-name">
                          <a
                            href="/detail"
                            className=""
                            title="Apple Watch Series 6"
                          >
                            {item.name}
                          </a>
                        </div>
                        <div className="wrapper__slide-price">{item.price}</div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
