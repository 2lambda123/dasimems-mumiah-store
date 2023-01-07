import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/user_context";
import logo from "../assets/images/logo-light.png";

function Register(props) {
  const {
    email,
    name,
    password,
    password_confirmation,
    accept_terms,
    onChange,
    validateState,
    onSubmit,
  } = useUserContext();
  return (
    <div className="container py-5">
      <form>
        <div className="form-outline mb-4">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={onChange}
            value={name}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={onChange}
            value={email}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={onChange}
            value={password}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            name="password_confirmation"
            type="password"
            className="form-control"
            onChange={onChange}
            value={password_confirmation}
          />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="accept_terms"
                id="accept_terms"
                onChange={onChange}
                checked={accept_terms}
              />
              <label className="form-check-label"> Remember me </label>
            </div>
          </div>
        </div>

        <button
          type="button"
          disabled={!validateState()}
          onClick={onSubmit}
          className={
            !validateState()
              ? "btn btn-primary btn-block mb-4 disabled"
              : "btn btn-primary btn-block mb-4"
          }
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
