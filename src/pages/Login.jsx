import { Col, Row } from 'antd'
import React from 'react'
import { DisplayBanner, Form, FormInputField, SubmitBtn } from '../components'
import { routeName } from '../utils/constant'
import useFormContext from '../contexts/form_context'
import { Link } from 'react-router-dom'

const Login = () => {
  const { email, password, setFormDetails } = useFormContext()

  const changeValue = (details) => {
    console.log(details)
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
              <Form data={formData} />

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
                link={{ linkLabel: 'Register', link: routeName.signUp }}
                title="Welcome to login"
                text="Don't have an account?"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Login
