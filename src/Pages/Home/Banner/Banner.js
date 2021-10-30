import React from "react";
import "./Banner.css";
import { Card, Col, Row } from "react-bootstrap";
import image1 from "../../../images/1.png";
import image2 from "../../../images/2.png";
import image3 from "../../../images/30.png";
import image4 from "../../../images/31.png";

const Banner = () => {
  return (
    <>
      <div className="banner-container d-flex justify-content-center align-items-center text-center px-2">
        <Col md={8}>
          <h1 className="display-2 text-success fw-bold">
            Plan Your Travel Now!
          </h1>
          <p className="lead text-white bg-info bg-opacity-50 rounded-pill fs-4 fw-bold my-5">
            Experience the various exciting tour and travel packages and Make
            hotel reservations, find vacation packages, search cheap hotels and
            events
          </p>
          <Col md={8} xs={12} className="d-flex justify-content-evenly mx-auto">
            <img className="bg-info px-3 rounded-3" src={image1} alt="" />
            <img className="bg-info px-3 rounded-3" src={image2} alt="" />
            <img className="bg-info px-3 rounded-3" src={image3} alt="" />
            <img className="bg-info px-3 rounded-3" src={image4} alt="" />
            
          </Col>
        </Col>
      </div>
    </>
  );
};

export default Banner;
