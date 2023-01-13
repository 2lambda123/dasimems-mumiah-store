import { Col } from "antd";
import React, { useState } from "react";
import PaymentDetailsContent from "./inner/PaymentDetailsContent";
import { FaRegCreditCard, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiDirectionLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import FormInputField from "../form/FormInputField";
import SubmitBtn from "../form/SubmitBtn";

const PaymentDetails = () => {
  const [paymentType, setPaymentType] = useState("card");
  const [activeContent, setActiveContent] = useState("contact");
  return (
    <>
      <Col
        span={14}
        order={1}
        lg={{ span: 14, order: 1 }}
        xs={{ span: 24, order: 2 }}
        className="payment-details"
      >
        <PaymentDetailsContent
          contentOpen={activeContent === "contact"}
          icon={<FaRegUserCircle />}
          title="Contact Info"
          subtitleOne="Enrico Smith"
          subtitleTwo="+855 - 666 - 7744"
        >
          <div className="inner-details-header flex-container space-between align-center">
            <h2 className="title">Contact Information</h2>
          </div>

          <div className="inner-details-form">
            <FormInputField label="Your phone number" type="tel" />

            <FormInputField label="Email address" type="email" />
          </div>

          <div className="inner-details-form-action flex-container align-center space-between wrap">
            <SubmitBtn
              className="submit-payment-details half-width"
              text="Save and next to shipping"
              onClick={() => {
                setActiveContent("address");
              }}
            />

            <SubmitBtn
              className="half-width"
              text="Cancel"
              onClick={() => {
                setActiveContent("");
              }}
            />
          </div>
        </PaymentDetailsContent>

        <PaymentDetailsContent
          contentOpen={activeContent === "address"}
          icon={<RiDirectionLine />}
          title="Shipping Address"
          subtitleOne="St. Paul's Road, Norris, SD 57560, Dakota, USA"
        >
          <div className="inner-details-form">
            <FormInputField label="Address" type="text" />

            <div className="inner-details-form-split flex-container space-between align-center wrap">
              <FormInputField label="City" type="text" className="half-width" />

              <FormInputField
                label="Country"
                type="text"
                className="half-width"
              />
            </div>
          </div>

          <div className="inner-details-form-action flex-container align-center space-between  wrap">
            <SubmitBtn
              className="submit-payment-details half-width"
              text="Save and next to Payment"
              onClick={() => {
                setActiveContent("payment");
              }}
            />

            <SubmitBtn
              className="half-width"
              text="Cancel"
              onClick={() => {
                setActiveContent("");
              }}
            />
          </div>
        </PaymentDetailsContent>

        
      </Col>
    </>
  );
};

export default PaymentDetails;
