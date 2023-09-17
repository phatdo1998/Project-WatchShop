import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Slide from "../../components/slide/Slide";
import "./home.scss";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import { Spin } from "antd";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

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
          <div className="content"></div>
          <div className="container__slide">
            <Slide />
          </div>
          <div className="container__content">
            <Content />
          </div>
          <div className="">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
