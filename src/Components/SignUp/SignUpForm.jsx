import React from "react";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
    terms: yup.boolean().required(),
  })
  .required();
function SignUpForm({ onSave }) {
  // const defaultValues = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   terms: false,
  // };

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
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
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
            Sign Up
          </Card.Title>

          <form onSubmit={handleSubmit((data) => save(data))} noValidate>
            <div class="mb-3 mt-5">
              <h6
                className="fw-bold"
                style={{ fontSize: "14px", color: "#666666" }}
              >
                New Account Register
              </h6>
              <input
                type="text"
                className="form-control"
                {...register("firstName", { required: true })}
                placeholder="First Name"
                style={{
                  outline: "none",
                  borderColor: "#ced4da",
                  boxShadow: "none",
                }}
              />
              {errors.firstName && (
                <span className="text-danger fs-6">First Name is required</span>
              )}
            </div>
            <div class="mb-3">
              <input
                type="text"
                {...register("lastName", { required: true })}
                className="form-control"
                placeholder="Last Name"
                style={{
                  outline: "none",
                  borderColor: "#ced4da",
                  boxShadow: "none",
                }}
              />
              {errors.lastName && (
                <span className="text-danger fs-6">Last Name is required</span>
              )}
            </div>
            <div class="mb-3">
              <input
                type="email"
                {...register("email", { required: true })}
                className="form-control"
                placeholder="Email Address"
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
            <div class="mb-2">
              <input
                type="password"
                {...register("password", { required: true })}
                className="form-control rounded-0"
                placeholder="Password"
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
            <div className="form-check mb-5">
              <input
                className="form-check-input"
                onChange={handleChange}
                type="checkbox"
                id="flexCheckDefault"
                {...register("terms", { required: true })}
              />
              <label
                className="form-check-label fw-normal"
                style={{ color: "#706A6A", fontSize: "14px" }}
                htmlFor="flexCheckDefault"
              >
                I agree to the terms and conditions.
              </label>
              {errors.terms && (
                <span className="text-danger fs-6 d-block">
                  Please Check terms & condition
                </span>
              )}
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
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-decoration-none"
                  style={{
                    color: "#4f4f4f",
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: "500",
                  }}
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
}

export default SignUpForm;
