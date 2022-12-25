import { Button, Col, Row } from "antd";
import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet"
import { contacts} from "../utils/constant";

function Contact(props) {

  const [contactForm, setContactForm] = useState({
    name: "",
    nameErr: "",
    email: "",
    emailErr: "",
    message: "",
    messageErr: ""
  })

  const submitMessage = useCallback(()=>{

    var {name, email, message} = contactForm;

    if (message.trim() === "") {

      setContactForm(prevState => {
        return ({
          ...prevState,
          messageErr: "Please input your email"
        })
      })

    }

    if(email.trim() === ""){

      setContactForm(prevState => {
        return({
          ...prevState,
          emailErr: "Please input your email"
        })
      })

    }

    if(name.trim() === ""){

      setContactForm(prevState => {
        return({
          ...prevState,
          nameErr: "Please input your email"
        })
      })

    }

  }, [contactForm])

  return (
    <>
    

      <Helmet>
        <title>Contact | Mumiah Stores</title>
      </Helmet>

      <Row justify="center" className="contact-banner">

        <h1 className="contact-title">Contact</h1>
      </Row>

      <Row justify="center" className="contact-content">
        
        <Col span={22}>

          <Row justify="space-between">

            <Col 
              span={11}
              lg={{span: 11}}
              md={{span: 11}}
              xs={{span: 24}} 
              className="contact-content-details">

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

            <Col
              span={11}
              lg={{span: 11}}
              md={{span: 11}} 
              xs={{span: 24}}
              className="contact-content-details">

              <div className="form-content flex-container column ">
                
                <label htmlFor="name">Full Name</label>

                <input type="text"
                  value={contactForm.name}
                  placeholder="Example Doe"
                  id="name"
                  onChange={(e)=>{
                    setContactForm(prevState => {
                      return({
                        ...prevState,
                        name: e.target.value,
                        nameErr: ""
                      })
                    })
                  }}
                
                />

                {contactForm.nameErr !== "" && <p className="form-err">{contactForm.nameErr}</p>}

              </div>

              <div className="form-content flex-container column ">

                <label htmlFor="email">Email Address</label>

                <input type="email"
                  value={contactForm.email}
                  placeholder="example@example.com"
                  id="email"
                  onChange={(e) => {
                    setContactForm(prevState => {
                      return ({
                        ...prevState,
                        email: e.target.value,
                        emailErr: ""
                      })
                    })
                  }}

                />

                {contactForm.emailErr !== "" && <p className="form-err">{contactForm.emailErr}</p>}

              </div>

              <div className="form-content flex-container column ">

                <label htmlFor="message">Message</label>

                <textarea type="text"
                  value={contactForm.message}
                  id="message"
                  onChange={(e) => {
                    setContactForm(prevState => {
                      return ({
                        ...prevState,
                        message: e.target.value,
                        messageErr: ""
                      })
                    })
                  }}

                />

                {contactForm.messageErr !== "" && <p className="form-err">{contactForm.messageErr}</p>}

              </div>

              <div className="form-content flex-container column align-start">

                <Button className="submit-btn" onClick={submitMessage}>
                  Send Message
                </Button>

              </div>

            </Col>
            
          </Row>

        </Col>

      </Row>
      

    </>
  );
}

export default Contact;
