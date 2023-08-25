import React from "react";
import slider from "../../assets/image/slide-image.jpg";
import "./slide.scss";

const Slide = () => {
  return (
    <div className="container ">
      <a href="/">
        <img src={slider} alt="" className="slide__img" />
      </a>
    </div>
  );
};

export default Slide;
