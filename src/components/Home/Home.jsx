import React from "react";
import Header from "../header/Header";
import Slide from "../slide/Slide";
import "./home.scss";
import Content from "../content/Content";
import Footer from "../footer/Footer";

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
