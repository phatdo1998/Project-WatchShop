/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Heading from "../heading/Heding";
import { data, newProduct, news } from "../../data";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import "./product.scss";
import { Navigation, Autoplay } from "swiper/modules";
import ProductItems from "../productItem/ProductItems";
import SlideWatch from "../slideWatch/SlideWatch";

const Product = () => {
  const [selected, setSelected] = useState(0);
  const handleClick = (index) => {
    setSelected(index);
  };

  const breakpoints = {
    sx: 0,
    sm: 426,
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
              return <ProductItems item={item} />;
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
              <Swiper
                breakpoints={{
                  [breakpoints.xxl]: {
                    slidesPerView: 3,
                  },
                  [breakpoints.xl]: {
                    slidesPerView: 3,
                  },
                  [breakpoints.lg]: {
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
                <div className="wrapper__slide-icon-left">
                  <AiOutlineLeft size={20} />
                </div>
                <div className="wrapper__slide-icon-right">
                  <AiOutlineRight size={20} />
                </div>
                {newProduct.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {/* <div key={index} className="wrapper__slide-wrapper">
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
                      </div> */}
                      <SlideWatch name={item.name} price={item.price} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="selling-products">
          <div className="wrapper__selling-products--heading">
            <Heading
              title={"SẢN PHẨM BÁN CHẠY"}
              description={
                "Bộ sưu tập những sản phẩm sang chảnh, thông minh dành cho nữ giới"
              }
            />
            <div className="wrapper__selling-products-slide">
              <div className="wrapper__selling-products--content">
                <Swiper
                  breakpoints={{
                    [breakpoints.xxl]: {
                      slidesPerView: 3,
                    },
                    [breakpoints.xl]: {
                      slidesPerView: 3,
                    },
                    [breakpoints.lg]: {
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
                    nextEl: ".wrapper__selling-products-icon-right",
                    prevEl: ".wrapper__selling-products-icon-left",
                  }}
                  modules={[Navigation, Autoplay]}
                >
                  <div className="wrapper__selling-products-icon-left">
                    <AiOutlineLeft size={20} />
                  </div>
                  <div className="wrapper__selling-products-icon-right">
                    <AiOutlineRight size={20} />
                  </div>
                  {newProduct.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        {/* <div
                          key={index}
                          className="wrapper__selling-products-wrapper"
                        >
                          <a href="" className="wrapper__selling-products-link">
                            <img
                              src={s6}
                              alt=""
                              className="list__selling-products-image"
                            />
                          </a>
                          <div className="wrapper__selling-products-name">
                            <a
                              href="/detail"
                              className=""
                              title="Apple Watch Series 6"
                            >
                              {item.name}
                            </a>
                          </div>
                          <div className="wrapper__selling-products-price">
                            {item.price}
                          </div>
                        </div> */}
                        <SlideWatch name={item.name} price={item.price} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="news">
          <div className="wrapper__news-heading">
            <Heading
              title={"Tin tức"}
              description={
                "Chúng tôi sẵn sàng cập nhật những kiến thức, công nghệ mới nhất dành cho các bạn"
              }
            />
            <div className="wrapper__news-slide">
              <div className="wrapper__news-content">
                <Swiper
                  breakpoints={{
                    [breakpoints.xxl]: {
                      slidesPerView: 4,
                    },
                    [breakpoints.xl]: {
                      slidesPerView: 4,
                    },
                    [breakpoints.lg]: {
                      slidesPerView: 4,
                    },
                    [breakpoints.md]: {
                      slidesPerView: 2,
                    },
                    [breakpoints.sx]: {
                      slidesPerView: 1,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                  }}
                  slidesPerView={2}
                  modules={[Autoplay]}
                >
                  {news.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div key={index} className="wrapper__news-wrapper">
                          <div className="wrapper__time">
                            <div className="">{item.time}</div>
                          </div>
                          <a href="" className="wrapper__news-link">
                            <img
                              src="https://hinhanh.webvua.com/images/news/4752/resize/3032372797202.jpg"
                              alt=""
                              className="list__news-image"
                            />
                          </a>
                          <div className="wrapper__news-name">
                            <a href="/detail" className="" title={item.name}>
                              {item.name}
                            </a>
                          </div>
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
    </div>
  );
};

export default Product;
