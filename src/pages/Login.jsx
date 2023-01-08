import { Col, Row } from "antd";
import React from "react";
import { DisplayBanner, FormInputField, SubmitBtn } from "../components";
import { routeName } from "../utils/constant";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Row justify="center" className="login">
        <Col
          span={22}
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
              <FormInputField placeholder="Email" label="Email" type="email" />

              <FormInputField
                placeholder="Password"
                label="Password"
                type="password"
              />

              <SubmitBtn />

              <Row justify="space-between" className="login-extra">
                <FormInputField
                  label="Remember Me"
                  type="checkbox"
                  reversed
                  row
                />

                <Link to="">Forgot Password?</Link>
              </Row>
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
                title="Welcome to login"
                text="Don't have an account?"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Login;
