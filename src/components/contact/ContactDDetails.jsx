import { Col } from 'antd'
import React from 'react'
import { contacts } from '../../utils/constant'

const ContactDDetails = () => {
  return (
    <Col
        span={11}
        lg={{ span: 11 }}
        md={{ span: 11 }}
        xs={{ span: 24 }}
        className="contact-content-details"
    >
        <div className="details-container">
        <p className="title flex-container">
            <span className="icon">🗺</span>
            <span className="text">Address</span>
        </p>
        <p className="value">{contacts.address}</p>
        </div>

        <div className="details-container">
        <p className="title flex-container">
            <span className="icon">💌</span>
            <span className="text">Email</span>
        </p>
        <p className="value">{contacts.email}</p>
        </div>

        <div className="details-container">
        <p className="title flex-container">
            <span className="icon">☎</span>
            <span className="text">Phone Number</span>
        </p>
        <p className="value">{contacts.mobileNumber}</p>
        </div>
    </Col>
  )
}

export default ContactDDetails
