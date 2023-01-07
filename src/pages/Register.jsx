import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/user_context";
import { useForm } from "react-hook-form";
import logo from "../assets/images/logo-light.png";

function Register(props) {
  const {
    email,
    name,
    password,
    password_confirmation,
    accept_terms,
    onChange,
    onSubmit,
  } = useUserContext();

  // handle form events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div className="container py-5">
      <form>
        <div className="form-outline mb-4">
          <label className="form-label">Full Name</label>
          <input
            {...register("name", {
              required: "Your name is required",
            })}
            type="text"
            className="form-control"
            onChange={onChange}
            value={name}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: 12 }}>{errors.name.message}</p>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Email address</label>
          <input
            {...register("email", {
              required: "Your email is required",
            })}
            type="email"
            className="form-control"
            onChange={onChange}
            value={email}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: 12 }}>{errors.email.message}</p>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum Required length is 8",
              },
              maxLength: {
                value: 20,
                message: "Maximum Required length is 20",
              },
            })}
            type="password"
            className="form-control"
            onChange={onChange}
            value={password}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: 12 }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            {...register("password_confirmation", {
              required: "confirm password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            type="password"
            className="form-control"
            onChange={onChange}
            value={password_confirmation}
          />
          {errors.password_confirmation && (
            <p style={{ color: "red", fontSize: 12 }}>
              {errors.password_confirmation.message}
            </p>
          )}
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                {...register("accept_terms", {
                  required: "This feild is required",
                })}
                className="form-check-input"
                type="checkbox"
                id="accept_terms"
                onChange={onChange}
                checked={accept_terms}
              />
              <label className="form-check-label">
                {" "}
                Accept terms and conditions{" "}
              </label>
              {errors.accept_terms && (
                <p style={{ color: "red", fontSize: 12 }}>
                  {errors.accept_terms.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
