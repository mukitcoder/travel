import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

// Services Section

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
    <Container>
    <div className="text-center my-5">
    <h1>Top Tour Packages</h1>
    <p className="lead">World's leading tour and travels Booking website,Over 30,000 packages worldwide.</p>
    </div>
      <Row xs={1} md={3} className="g-4">
        
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
      </Container>
    </>
  );
};

export default Services;
