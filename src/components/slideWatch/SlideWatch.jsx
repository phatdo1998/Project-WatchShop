import React, { useEffect, useState } from "react";
import "./slideWatch.scss";
import { Link } from "react-router-dom";

const SlideWatch = ({ name, price, item, id }) => {
  const [data, setData] = useState();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    item?.imageColor.map((item) => setData(item.image));
  }, [item?.imageColor]);

  return (
    <div>
      <div className="wrapper__slide-wrapper">
        <Link
          onClick={handleClick}
          to={`/detail/${id}`}
          className="wrapper__slide-link"
        >
          <img src={data} alt="" className="list__slide-image" />
        </Link>
        <div className="wrapper__slide-name">
          <Link
            onClick={handleClick}
            to={`/detail/${id}`}
            className=""
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
