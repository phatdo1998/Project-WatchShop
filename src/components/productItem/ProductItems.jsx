import React, { useEffect, useState } from "react";
import "./productItems.scss";
import { Link } from "react-router-dom";

const ProductItems = ({ item, numColumn }) => {
  const [data, setData] = useState();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    item.imageColor.map((item) => setData(item.image));
  }, [item.imageColor]);

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
          <img src={data} alt="" className="list__watch--image" />
        </Link>
        <div className="list__watch--name">
          <Link
            // to={`/detail/${item.id}`}
            className="product__items-link"
            title={item.name}
          >
            {item.name}
          </Link>
        </div>
        <div className="list__watch--price">{item.price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ProductItems;
