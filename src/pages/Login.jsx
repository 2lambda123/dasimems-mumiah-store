import { Col, Row, message } from 'antd'
import React from 'react'
import { DisplayBanner, Form, FormInputField, SubmitBtn } from '../components'
import { routeName } from '../utils/constant'
import useFormContext from '../contexts/form_context'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCallback } from 'react'

const Login = () => {
  const { email, password, setFormDetails } = useFormContext()
  const [loading, setLoading] = useState(false);

  const changeValue = (details) => {
    setFormDetails(details)
  }

  var formData = {
    inputs: [
      {
        label: 'Email',
        value: email,
        // onChange: changeValue,
        placeholder: 'Email',
        type: 'email',
        name: 'email',
        row: false,
        required: false,
        className: '',
        reverse: false,
      },

      {
        label: 'Password',
        value: password,
        // onChange: changeValue,
        placeholder: 'Password',
        type: 'password',
        name: 'password',
        row: false,
        required: false,
        className: '',
        reverse: false,
      },
    ],
    formTitle: 'Sign In',
    formTopContent: '',
    onFormChange: changeValue
  }

  const loginUser = useCallback(() =>{
    console.log("clicked")

    if(email.trim() !== "" && password.trim() !== ""){
      setLoading(true);
      //code to perform login request
    }else{
      message.error("Please fill out all fields")
    }

  }, [email, password])


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

              <SubmitBtn action={loginUser} loading={loading} text="Login" className="login-submit" />

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
