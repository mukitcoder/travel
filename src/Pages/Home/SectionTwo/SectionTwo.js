import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mobile from "../../../images/mobile.png";
import android from "../../../images/android.png";
import apple from "../../../images/apple.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SectionTwo = () => {
  return (
    <Container className="bg-light my-5">
      <Row md={2} xs={1} className="py-3">
        <Col>
          <img className="img-fluid" src={mobile} alt="" />
        </Col>
        <Col className="my-auto">
          <h1>Have you tried our mobile app?</h1>
          <p className="lead">World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
          <h6 className="mb-3"> <FontAwesomeIcon className="me-2 text-primary" icon={faCheck}/> Easy Hotel Booking</h6>
          <h6 className="mb-3"> <FontAwesomeIcon className="me-2 text-primary" icon={faCheck}/> Tour and Travel Packages</h6>
          <h6 className="mb-3"><FontAwesomeIcon className="me-2 text-primary" icon={faCheck}/> Package Reviews and Ratings</h6>
          <h6 className="mb-3"><FontAwesomeIcon className="me-2 text-primary" icon={faCheck}/> Manage your Bookings, Enquiry and Reviews</h6>
          <img className="img-fluid me-3" src= {android} alt="" />
          <img className="img-fluid" src= {apple} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
