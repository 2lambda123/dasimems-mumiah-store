import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Col, Row } from "antd";
import { DisplayBanner, FormInputField, SubmitBtn } from "../components";
import { routeName } from "../utils/constant";
import { baseUrl } from "../utils/constant";

function Register(props) {
  // handle form events
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  let password;

  password = watch("password", "");

  // OnSubmit
  const onRegSubmit = async (data) => {
    axios
      .put(`${baseUrl}/register`, data)
      .then((res) => {
        if (res.status === 201) {
          console.log("Reg successful");
        } else {
          console.log("error occured");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Row justify="center" className="login">
        <Col
          span={21}
          className="login-container flex-container align-center justify-center"
        >
          <Row justify="space-between" className="login-content align-center">
            <Col
              span={12}
              order={1}
              lg={{ span: 12, order: 1 }}
              md={{ span: 12, order: 1 }}
              xs={{ span: 24, order: 2 }}
              className="login-form"
            >
              <form>
                <FormInputField
                  {...register("name", {
                    required: "Your name is required",
                  })}
                  placeholder="Full Name"
                  label="Full Name"
                  type="text"
                  errors={
                    errors.name && (
                      <p style={{ color: "red", fontSize: 12 }}>
                        {errors.name.message}
                      </p>
                    )
                  }
                />
                <FormInputField
                  {...register("email", {
                    required: "Your email is required",
                  })}
                  placeholder="Email address"
                  label="Email address"
                  type="email"
                  errors={
                    errors.email && (
                      <p style={{ color: "red", fontSize: 12 }}>
                        {errors.email.message}
                      </p>
                    )
                  }
                />

                <FormInputField
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
                  placeholder="Password"
                  label="Password"
                  type="password"
                  errors={
                    errors.password && (
                      <p style={{ color: "red", fontSize: 12 }}>
                        {errors.password.message}
                      </p>
                    )
                  }
                />

                <FormInputField
                  {...register("password_confirmation", {
                    required: "confirm password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                  placeholder="Confirm password"
                  label="Confirm password"
                  type="password"
                  errors={
                    errors.password_confirmation && (
                      <p style={{ color: "red", fontSize: 12 }}>
                        {errors.password_confirmation.message}
                      </p>
                    )
                  }
                />

                <FormInputField
                  {...register("accept_terms", {
                    required: "This feild is required",
                  })}
                  label="Accept our terms and conditions"
                  type="checkbox"
                  reversed
                  row
                  errors={
                    errors.accept_terms && (
                      <p style={{ color: "red", fontSize: 12 }}>
                        {errors.accept_terms.message}
                      </p>
                    )
                  }
                />

                <SubmitBtn
                  text="Register"
                  onClick={handleSubmit(onRegSubmit)}
                />
              </form>
            </Col>

            <Col
              span={12}
              order={2}
              lg={{ span: 12, order: 2 }}
              md={{ span: 12, order: 2 }}
              xs={{ span: 24, order: 1 }}
              className="login-banner flex-container column align-center jusitfy-center"
            >
              <DisplayBanner
                link={{ linkLabel: "Login", link: routeName.login }}
                title="Welcome to Mumiah"
                text="Already have an account?"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Register;
