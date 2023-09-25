import React from "react";
import Card from "react-bootstrap/Card";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  })
  .required();

function LoginForm({ onSave }) {
  const { register, watch, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const save = (data) => {
    console.log(data, "Form Value");

    if (onSave) {
      onSave(data);
      reset();
    }
  };
  return (
    <Card
      style={{
        width: "451px",
        height: "auto",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "20px",
        padding: "5px 10px",
      }}
      className="mx-auto d-block"
    >
      <Card.Body>
        <Card.Title
          className="fs-3 fw-bold text-center text-uppercase mt-5 mb-5"
          style={{ color: "#e91b1a", lineHeight: "23px" }}
        >
          Log In
        </Card.Title>

        <form onSubmit={handleSubmit((data) => save(data))} noValidate>
          <div class="mb-3 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              style={{
                outline: "none",
                borderColor: "#ced4da",
                boxShadow: "none",
              }}
            />
            {errors.email && (
              <span className="text-danger fs-6">Email is required</span>
            )}
          </div>

          <div class="mb-1">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Enter Password Here"
              style={{
                outline: "none",
                borderColor: "#ced4da",
                boxShadow: "none",
              }}
            />
            {errors.password && (
              <span className="text-danger fs-6">Password is required</span>
            )}
          </div>
          <div className="text-end mb-5">
            <p
              className="fw-normal"
              style={{
                color: "#585858",
                fontSize: "12px",
                lineHeight: "14.4px",
              }}
            >
              {" "}
              Forget Password
            </p>
          </div>
          <div className="text-center mb-5">
            <button
              type="submit"
              className="rounded-1 p-2 fs-6 text-light"
              style={{
                width: "271px",
                height: "36px",
                background: "#bb0100",
                lineHeight: "16px",
                fontWeight: "500",
              }}
            >
              Continue
            </button>
          </div>
          <div className="text-center mb-3 mt-4">
            <p
              className="fw-normal"
              style={{
                color: "#4f4f4f",
                fontSize: "14px",
                lineHeight: "16.8px",
              }}
            >
              {" "}
              New to NeoSTORE?{" "}
              <Link
                to="/signup"
                className="text-decoration-none"
                style={{
                  color: "#4f4f4f",
                  fontSize: "16px",
                  lineHeight: "19px",
                  fontWeight: "500",
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
