import React from "react";
import "./heading.scss";

const Heading = ({ title, description }) => {
  return (
    <div className="wrapper__container">
      <div className="wrapper__heading">
        <div className="wrapper__heading-item">
          <h1 className="heading">{title}</h1>
          <div className="empty__heading"> </div>
        </div>
      </div>
      <div className="description">
        <span className="">{description}</span>
      </div>
    </div>
  );
};

export default Heading;
