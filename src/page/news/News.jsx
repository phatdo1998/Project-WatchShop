import React, { useEffect, useState } from "react";
import "./news.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { news } from "../../data/index";
import { Spin } from "antd";

const News = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);
  return (
    <div className="container__news">
      {loading ? (
        <div className="wrapper__loading">
          <Spin />
        </div>
      ) : (
        <>
          <div className="container__header">
            <Header />
          </div>
          <div className="container__news-body">
            <div className="wrapper__news">
              <div className="news-heading">Tin tức</div>
              <div className="wrapper__content">
                <div className="wrapper__item-news">
                  {news.map((item, index) => {
                    return (
                      <div key={index} className="wrapper__content-item">
                        <div className="news-date">{item.time}</div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="news__img"
                        />
                        <div className="wrapper__item">
                          <div className="news__title">{item.name}</div>
                          <div className="news__description">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="wrapper__new-content">
                  <div className="container__new-content">
                    <div className="new__heading">Tin tức mới</div>
                    <div className="new__content">
                      {news.map((item, index) => {
                        return (
                          <div key={index} className="wrapper__content-new">
                            <img src={item.image} alt="" className="new__img" />
                            <div className="new__name">{item.name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
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

export default News;
