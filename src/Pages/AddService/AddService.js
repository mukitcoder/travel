import axios from "axios";
import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`https://haunted-asylum-96390.herokuapp.com/services`, data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className=" d-flex justify-content-center align-items-center mb-5">
      <Col md={4}>
        <h2 className="py-3 text-center">Add Packages To Homepage !</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              {...register("des")}
              placeholder="Description"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control {...register("img")} placeholder="image URL" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default AddService;
