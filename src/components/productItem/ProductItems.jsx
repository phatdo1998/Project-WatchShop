import React from "react";
import "./productItems.scss";
import { Link } from "react-router-dom";
import s6 from "../../assets/image/s6_preview_rev_1.png";

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
          to={`detail/${item.id}`}
          className="list__watch--wrapper-image"
        >
          <img src={s6} alt="" className="list__watch--image" />
        </Link>
        <div className="list__watch--name">
          <Link href="/detail" className="" title={item.name}>
            {item.name}
          </Link>
        </div>
        <div className="list__watch--price">{item.price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ProductItems;
