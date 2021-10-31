import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Form, Button, Table } from "react-bootstrap";
import { useParams } from "react-router";

const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  // get users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://haunted-asylum-96390.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // delete user
  const handleDeleteUser = (id) => {
    const confirmation = window.confirm("Are you sure for Delete?");
    if (confirmation) {
      const url = `https://haunted-asylum-96390.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };

  // post users
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const dateRef = useRef();
  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const city = cityRef.current.value;
    const date = dateRef.current.value;
    const newUser = { name, email, phone, city, date };
    fetch(`https://haunted-asylum-96390.herokuapp.com/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Thank you for arranging a wonderful trip for us! Our team will contact you shortly!");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  // post users end

  useEffect(() => {
    fetch(`https://haunted-asylum-96390.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <Container className="pt-3">
      <h1 className="text-center py-3 text-danger bg-info bg-opacity-25 rounded-pill">
        TOP Regular Package In This Year
      </h1>
      <Row className="g-4" xs={1}>
        <Col md={3} className="d-flex bg-success bg-opacity-25">
          <img className="img-fluid rounded-3" src={service.img} alt="" />
        </Col>
        <Col md={5} className="bg-success bg-opacity-25">
          <h1 className="text-success pt-3">{service.name}</h1>
          <p>
            {" "}
            {service.des} {service.des}
            {service.des}
          </p>
          <h4 className="text-secondary">
            Regular Package 6 Night/7 Days <small>( $2000 )</small>{" "}
          </h4>
        </Col>

        <Col className="bg-info bg-opacity-50" md={4}>
          {/* Add user  */}

          <h5 className="text-primary text-center my-3 fw-bold">
            Please Book Your{" "}
            <span className="text-danger display-6">{service.name}</span>{" "}
            Package
          </h5>
          <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Your Name" type="text" ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Email" type="email" ref={emailRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Contact Number"
                type="number"
                ref={phoneRef}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Your City" type="text" ref={cityRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="date" ref={dateRef} />
            </Form.Group>
            <Button className="w-100 mb-1 fw-bold" type="submit">
              Book Your Package
            </Button>
            <small className="text-danger fw-bold text-center ms-5">Please reload the page to see your result</small>
          </Form>
        </Col>
      </Row>

      <h2 className="text-center py-3 text-danger bg-warning bg-opacity-50 my-3">Total Booked Packages : {users.length} </h2>

      <Table responsive="sm" striped bordered hover variant="dark">
      <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Contact No.</th>
      <th>From City</th>
      <th>Booking Date</th>
      <th>Action</th>
    </tr>
  </thead>
  {   users.map(user=>(<tbody key={user._id}>
    <tr>
    <td> # </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.city}</td>
      <td>{user.date}</td>
      <td><Button onClick={() => handleDeleteUser(user._id)}>Delete</Button></td>
    </tr>
    </tbody>
         ))
     }
  
      </Table>
    </Container>
  );
};

export default Booking;
