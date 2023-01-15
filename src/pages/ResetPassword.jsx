import { Col, Row } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { DisplayBanner, FormInputField, SubmitBtn } from "../components";
import { images } from "../utils/constant";
import { AuthData } from "../utils/helpers";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // OnSubmit
  const forgotPassword = async (data) => {
    setLoading(true);

    try {
      const item = AuthData("/password/reset", data);

      item
        .then((res) => {
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
          setLoading(false);
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
          setTimeout(() => setLoading(false), 1500);
        });
    } catch (err) {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  return (
    <>
      <Row justify="center" className="login forgot-password-page">
        <Col
          span={21}
          className="login-container flex-container align-center justify-center"
        >
          <Row justify="space-between" className="login-content align-center">
            <Col
              span={12}
              order={2}
              lg={{ span: 12, order: 2 }}
              md={{ span: 12, order: 2 }}
              xs={{ span: 24, order: 2 }}
              className="login-form flex-container column align-center justify-center"
            >
              <FormInputField
                {...register("email", {
                  required: "Your email is required",
                })}
                errors={
                  errors.email && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.email.message}
                    </p>
                  )
                }
                placeholder="Enter your email"
                label="Password Reset Email"
                type="email"
              />

              <SubmitBtn
                loading={loading}
                onClick={handleSubmit(forgotPassword)}
                text="Reset Password"
                className="login-submit"
              />
            </Col>

            <Col
              style={{
                background: `url("${images.forgotPassword}") no-repeat`,
                backgroundSize: "cover",
                backgroundPositionX: "center",
                backgroundPositionY: "top",
              }}
              span={12}
              order={1}
              lg={{ span: 12, order: 1 }}
              md={{ span: 12, order: 1 }}
              xs={{ span: 24, order: 1 }}
              className="login-banner flex-container column align-center justify-center"
            >
              <div className="banner-overlay"></div>

              <DisplayBanner
                title="Forgot your Password?"
                text="Don't worry, we got you covered"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ResetPassword;
