import React from "react";
import "./productItems.scss";
import { Link } from "react-router-dom";
import s6 from "../../assets/image/s6_preview_rev_1.png";

const ProductItems = ({ item }) => {
  return (
    <div className="">
      <div className="list__watch--wrapper">
        <Link to={`detail/${item.id}`} className="list__watch--wrapper-image">
          <img src={s6} alt="" className="list__watch--image" />
        </Link>
        <div className="list__watch--name">
          <Link href="/detail" className="" title="Apple Watch Series 6">
            {item.name}
          </Link>
        </div>
        <div className="list__watch--price">{item.price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ProductItems;
