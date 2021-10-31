import React from "react";
import { Container, Form, Button } from "react-bootstrap";


// Contact page
const Contact = () => {
  return (
    <Container className="py-5 my-5 bg-warning bg-opacity-25 rounded-pill">
        <h1 className="text-center">Contact Us</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button className="w-100">Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contact;
