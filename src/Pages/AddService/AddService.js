import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {console.log(data)};
  return (
    <div>
      <h2>Add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <textarea {...register("des")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image URL" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
