import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {_id, name, des, img } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{des.slice(0, 200)}...</Card.Text>
            <div className="d-flex justify-content-between">
            <Link to={`/booking/${_id}`}>
            <Button>Book Now</Button>
            </Link>
            <Button>View Package</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
