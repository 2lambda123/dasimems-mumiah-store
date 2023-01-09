import { Col, Row } from 'antd'
import React from 'react'
import { DisplayBanner, FormInputField, SubmitBtn } from '../components'
import { routeName } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCallback } from 'react'

const Login = () => {
  const [loading, setLoading] = useState(false);

 
  const loginUser = useCallback(() =>{
    console.log("clicked")
    setLoading(true)

   

  }, [])


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
              <FormInputField placeholder="Email" label="Email" type="email" />

              <FormInputField
                placeholder="Password"
                label="Password"
                type="password"
              />

              <SubmitBtn action={loginUser} loading={loading} text="Login" className="login-submit" />

              <Row justify="space-between" className="login-extra">
                <FormInputField
                  label="Remember Me"
                  type="checkbox"
                  reversed
                  row
                />

                <Link to={routeName.forgotPassword}>Forgot Password?</Link>
              </Row>
            </Col>

            <Col
              span={12}
              order={2}
              lg={{ span: 12, order: 2 }}
              md={{ span: 12, order: 2 }}
              xs={{ span: 24, order: 1 }}
              className="login-banner flex-container column align-center justify-center"
            >
              <DisplayBanner
                link={{ linkLabel: "Register", link: routeName.signUp }}
                title="Welcome to Mumiah"
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
