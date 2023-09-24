import React from "react";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Slide from "../../components/slide/Slide";
import "./home.scss";

const Home = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Home;
