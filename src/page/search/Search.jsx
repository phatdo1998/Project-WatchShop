import React, { useEffect, useState } from "react";
import "./search.scss";
import { useSearchParams } from "react-router-dom";
import { getProductsByKeyword } from "../../data";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductItem from "../../components/productItem/ProductItems";
import { Spin } from "antd";

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = String(searchParams.get("keyword"));
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductsByKeyword(keyword);
      setData(result);
    };
    fetchApi();
  }, [keyword]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [keyword]);

  return (
    <div className="container">
      {loading ? (
        <div className="wrapper__loading">
          <Spin />
        </div>
      ) : (
        <>
          <div className="container__header">
            <Header />
          </div>
          <div className="wrapper__search">
            <div className="wrapper__search-product">
              <div className="seach__heading">Kết quả tìm kiếm : {keyword}</div>
              <div className="wrapper__product-search">
                {data?.map((item, index) => {
                  return <ProductItem key={index} item={item} numColumn={4} />;
                })}
              </div>
            </div>
          </div>
          <div className="container__footer">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
