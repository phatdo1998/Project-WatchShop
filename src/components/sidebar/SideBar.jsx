import React from "react";
import "./sidebar.scss";

import s6 from "../../assets/image/s6_preview_rev_1.png";

const SideBar = ({ data, type }) => {
  return (
    // eslint-disable-next-line eqeqeq
    <div className={`products__sidebar ${type == "modal" ? "hide" : "hidden"}`}>
      <div className="wrapper__heading-products">
        <div className="heading__products">DANH MỤC SẢN PHẨM</div>
        <div className="products__brand">App Watch</div>
        <div className="products__brand">Xiaomi Watch</div>
      </div>
      <div className="wrapper__selling-products">
        <div className="selling__products-heading">SẢN PHẨM BÁN CHẠY</div>
        {data?.map((item, index) => {
          return (
            <div key={index} className="wrapper__selling-item">
              <img src={s6} alt="" className="selling__image" />
              <div className="selling__item">
                <div className="products__name">{item.name}</div>
                <div className="products__price">
                  {item.price.toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
