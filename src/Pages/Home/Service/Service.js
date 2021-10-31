import { faBus, faCloudSunRain, faPlaneDeparture, faStar, faTrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


// service section
const Service = ({ service }) => {
  const {_id, name, des, img } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fs-4">{name}  <small className="text-secondary fs-5">(Special Package)</small> <FontAwesomeIcon className="text-danger fs-6" icon={faCloudSunRain} /></Card.Title>
            <Card.Text className="">{des.slice(0, 150)}...</Card.Text>
            <div className="d-flex justify-content-center">
            <Link to={`/booking/${_id}`}>
            <Button size="lg" className="me-2" >Book Now</Button>
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-info ms-3" icon={faBus} />
                <FontAwesomeIcon className="text-danger ms-3" icon={faTrain} />
                <FontAwesomeIcon className="text-success ms-3" icon={faPlaneDeparture} />
            </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
