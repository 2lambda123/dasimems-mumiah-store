import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { ContactDDetails, ContactForm } from "../components";

function Contact(props) {

  return (
    <>
      <Helmet>
        <title>Contact | Mumiah Stores</title>
      </Helmet>

      <Row justify="center" className="contact-banner">
        <h1 className="contact-title">Contact</h1>
      </Row>

      <Row justify="center" className="contact-content">
        <Col span={21}>
          <Row justify="space-between">
            <ContactDDetails />

            <ContactForm />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
