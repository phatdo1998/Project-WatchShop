import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../data";

const SideBar = ({ data, type }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState();
  const category = String(searchParams.get("category") || "all");

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getProducts();
      setProducts(res);
    };

    fetchApi();
  }, []);

  return (
    // eslint-disable-next-line eqeqeq
    <div className={`products__sidebar ${type == "modal" ? "hide" : "hidden"}`}>
      <div className="wrapper__heading-products">
        <div className="heading__products">DANH MỤC SẢN PHẨM</div>
        {products?.map((item, index) => {
          return (
            <div
              key={index}
              className={`products__brand ${
                item.name.replace(/\s/g, "").toLowerCase() === category
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSearchParams({
                  category: item.name.replace(/\s/g, "").toLowerCase(),
                })
              }
            >
              {item.name}
            </div>
          );
        })}
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
