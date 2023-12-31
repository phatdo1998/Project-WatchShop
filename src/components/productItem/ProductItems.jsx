import React from "react";
import "./productItems.scss";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ProductItems = ({ item, numColumn }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`wrapper__list-watch-item ${
        numColumn === 3 ? "three-column" : "four-column"
      }`}
    >
      <div className="list__watch--wrapper">
        <Link
          onClick={handleClick}
          to={`/detail/${item.id}`}
          className="list__watch--wrapper-image"
        >
          <LazyLoad>
            <img
              src={item.imageColor[0].image}
              alt={item.name}
              className="list__watch--image"
            />
          </LazyLoad>
        </Link>
        <div className="list__watch--name">
          <Link
            onClick={handleClick}
            to={`/detail/${item.id}`}
            className="product__items-link"
            title={item.name}
          >
            {item.name}
          </Link>
        </div>
        <div className="list__watch--price">{item.price.toLocaleString()}đ</div>
      </div>
    </div>
  );
};

export default ProductItems;
