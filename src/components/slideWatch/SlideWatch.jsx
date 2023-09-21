import React from "react";
import "./slideWatch.scss";
import { Link } from "react-router-dom";

const SlideWatch = ({ name, price, item, id }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="wrapper__slide-wrapper">
        <Link
          onClick={handleClick}
          to={`/detail/${id}`}
          className="wrapper__slide-link"
        >
          <img
            src={item.imageColor[0].image}
            alt={item.name}
            className="list__slide-image"
          />
        </Link>
        <div className="wrapper__slide-name">
          <Link
            onClick={handleClick}
            to={`/detail/${id}`}
            className="slide__name"
            title={name}
          >
            {name}
          </Link>
        </div>
        <div className="wrapper__slide-price">{price}đ</div>
      </div>
    </div>
  );
};

export default SlideWatch;
