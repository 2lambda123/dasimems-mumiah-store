import { Col, Row } from 'antd'
import React from 'react'
import { DisplayBanner, FormInputField, SubmitBtn } from '../components'
import { images } from '../utils/constant'

const ResetPassword = () => {
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
              <FormInputField placeholder="Enter your email" label="Password Reset Email" type="email" />

              

              <SubmitBtn text="Reset Password" className="login-submit" />

              
              
            </Col>

            <Col
            style={{background: `url("${images.forgotPassword}") no-repeat`, backgroundSize: "cover", backgroundPositionX: "center", backgroundPositionY: "top"}}
              span={12}
              order={1}
              lg={{ span: 12, order: 1 }}
              md={{ span: 12, order: 1 }}
              xs={{ span: 24, order: 1 }}
              className="login-banner flex-container column align-center justify-center"
            >

                <div className="banner-overlay"></div>

                <DisplayBanner title="Forgot your Password?" text="Don't worry, we got you covered" />

              
            </Col>
          </Row>
        </Col>
      </Row>

    </>
  )
}

export default ResetPassword
