/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getProducts, newProduct, news, sellingProducts } from "../../data";
import Heading from "../heading/Heding";
import ProductItems from "../productItem/ProductItems";
import SlideWatch from "../slideWatch/SlideWatch";
import "./product.scss";
import { Link } from "react-router-dom";
// import { Spin } from "antd";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(0);
  const [loading] = useState(false);
  const handleClick = (index) => {
    setSelected(index);
  };

  const breakpoints = {
    sx: 320,
    sm: 425,
    md: 650,
    lg: 768,
    xl: 1024,
    xxl: 1440,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    fetchProducts();
  }, []);

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
          {loading &&
            products.map((item, index) => {
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
            {products[selected]?.items?.map((item, index) => {
              return <ProductItems item={item} key={index} />;
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
                    slidesPerView: 2,
                  },
                  [breakpoints.md]: {
                    slidesPerView: 2,
                  },
                  [breakpoints.sm]: {
                    slidesPerView: 3,
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
                      <SlideWatch
                        name={item.name}
                        price={item.price.toLocaleString()}
                        item={item}
                        id={item.id}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="selling-products">
          <div className="wrapper__selling-products--heading">
            <div className="wrapper__selling-heading">
              <Heading
                title={"SẢN PHẨM BÁN CHẠY"}
                description={
                  "Bộ sưu tập những sản phẩm sang chảnh, thông minh dành cho nữ giới"
                }
              />
            </div>
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
                      slidesPerView: 2,
                    },
                    [breakpoints.md]: {
                      slidesPerView: 2,
                    },
                    [breakpoints.sm]: {
                      slidesPerView: 3,
                    },
                  }}
                  autoplay={{
                    delay: 4000,
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
                  {sellingProducts.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <SlideWatch
                          name={item.name}
                          price={item.price.toLocaleString()}
                          item={item}
                          id={item.id}
                        />
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
            <div className="wrapper__news">
              <Heading
                title={"Tin tức"}
                description={
                  "Chúng tôi sẵn sàng cập nhật những kiến thức, công nghệ mới nhất dành cho các bạn"
                }
              />
            </div>
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
                      slidesPerView: 2,
                    },
                    [breakpoints.md]: {
                      slidesPerView: 2,
                    },
                    [breakpoints.sx]: {
                      slidesPerView: 1,
                    },
                  }}
                  autoplay={{
                    delay: 5000,
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
                          <Link className="wrapper__news-link">
                            <img
                              src={item.image}
                              alt=""
                              className="list__news-image"
                            />
                          </Link>
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
