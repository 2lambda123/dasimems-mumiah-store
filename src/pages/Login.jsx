import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Col, Row } from "antd";
import { DisplayBanner, FormInputField, SubmitBtn } from "../components";
import { routeName } from "../utils/constant";
import { AuthData } from "../utils/helpers";

function Register(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // handle form events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // OnSubmit
  const loginUser = async (data) => {
    setLoading(true);

    try {
      const item = AuthData("/login", data);

      item
        .then((res) => {
          //perse email to localStorage
          const emailID = localStorage.setItem(
            "userEmail",
            res?.data?.authentication?.user?.email
          );
          const name = localStorage.setItem(
            "userName",
            res?.data?.authentication?.user?.name
          );

          const userId = res?.data?.authentication?.user?.id;
          localStorage.setItem("userId", userId);

          const user_token = res?.data?.authentication?.token;

          //set jwt to localstorage
          if (typeof window !== "undefined") {
            localStorage.setItem("user_token", user_token);
            navigate("/checkout");
          } else {
          }

          toast.success(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((err) => {
          //log error to toast
          const errMsg = err?.response?.data?.message;
          toast.error(errMsg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
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

                <SubmitBtn
                  text="Login"
                  loading={loading}
                  onClick={handleSubmit(loginUser)}
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
                link={{ linkLabel: "Register", link: routeName.signUp }}
                title="Welcome to Mumiah"
                text="DOn't have an account?"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Register;
