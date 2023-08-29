import React from "react";
import "./slideWatch.scss";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import { Link } from "react-router-dom";

const SlideWatch = ({ name, price }) => {
  return (
    <div>
      <div className="wrapper__slide-wrapper">
        <Link href="" className="wrapper__slide-link">
          <img src={s6} alt="" className="list__slide-image" />
        </Link>
        <div className="wrapper__slide-name">
          <Link href="/detail" className="" title="Apple Watch Series 6">
            {name}
          </Link>
        </div>
        <div className="wrapper__slide-price">{price}</div>
      </div>
    </div>
  );
};

export default SlideWatch;
