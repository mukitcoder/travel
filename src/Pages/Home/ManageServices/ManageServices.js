import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";


// Manage Service Page
const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://haunted-asylum-96390.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://haunted-asylum-96390.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);

          alert("successfully deleted");
        }
      });
  };
  return (
      <Container>
          <h1 className="text-center py-3">Manage Services</h1>
    <Row xs={1} md={3} className="g-4">
      {" "}
      {services.map((service) => (
        <Col key={service._id}>
          <Card>
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="danger" onClick={() => handleDelete(service._id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default ManageServices;
