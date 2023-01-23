import { Col } from "antd";
import React, { useEffect, useState } from "react";
import PaymentDetailsContent from "./inner/PaymentDetailsContent";
import { FaRegCreditCard, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiDirectionLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import FormInputField from "../form/FormInputField";
import SubmitBtn from "../form/SubmitBtn";
import { GetData } from "../../utils/helpers";
import { useCallback } from "react";
import axios from "axios";

const PaymentDetails = () => {
  
  const [paymentInfo, setPaymentInfo] = useState({
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    address: "",
    optional_address: ""
  });
  const [allAddress, setAllAddress] = useState([])
  const [activeContent, setActiveContent] = useState("contact");
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const name = localStorage.getItem("userName");

  const submitAddress = useCallback(()=>{

    setLoading(true)

  }, [paymentInfo])

  useEffect(()=>{

    
    setPaymentInfo(prevState => ({...prevState, email: localStorage.getItem("userEmail")}))

    GetData("/addresses").then((res)=>{

      setAllAddress(res.data);

      if(res.data.length > 0){

        setPaymentInfo(res.data[0]);

      }
    })

    axios.get("https://countriesnow.space/api/v0.1/countries/states").then(res=>{
      var countries = res.data;
      setCountryList(countries.data)
    })


  }, [])

  useEffect(()=>{

    const data = countryList.filter(country => country.name === paymentInfo.country)

    if(Array.isArray(data) && data.length > 0){

      setStateList(data[0].states);
    }

  }, [paymentInfo.country])

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
          contentOpen={true}
          icon={<FaRegUserCircle />}
          title="Contact Info"
          subtitleOne={name}
          subtitleTwo={paymentInfo? paymentInfo?.phone : null}
        >
          <div className="inner-details-header flex-container space-between align-center">
            <h2 className="title">Contact Information</h2>
          </div>

          <div className="inner-details-form">
            <FormInputField 
              value={paymentInfo?.phone} 
              label="Your Phone Number" 
              type="tel"
              onChange={(e)=>{

                setPaymentInfo(prevState => ({
                  ...prevState,
                  phone: e.target.value
                }))


              }}
            />

            <FormInputField 
              value={paymentInfo?.email} 
              label="Email address" 
              type="email"
              onChange={(e)=>{

                setPaymentInfo(prevState => ({
                  ...prevState,
                  email: e.target.value
                }))


              }} 
            
            />
          </div>

          {/* <div className="inner-details-form-action flex-container align-center space-between wrap">
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
          </div> */}
        </PaymentDetailsContent>

        <PaymentDetailsContent
          contentOpen={true}
          icon={<RiDirectionLine />}
          title="Shipping Address"
          subtitleOne={paymentInfo.address !== ""? paymentInfo.address : null}
        >
          <div className="inner-details-form">

              <FormInputField
              label="Country"
              type="select"
              selectOptions={countryList.map(country => ({label: country?.name, value: country?.name}))}
              value={paymentInfo?.country}
              onChange={(e)=>{

                setPaymentInfo(prevState => ({
                  ...prevState,
                  country: e.target.value
                }))


              }}
            />

            <div className="inner-details-form-split flex-container space-between align-center wrap">
              <FormInputField 
                label="State" 
                value={paymentInfo?.state} 
                type="select" 
                selectOptions={stateList.map(country => ({label: country?.name, value: country?.name}))}
                className="half-width"
                onChange={(e)=>{

                setPaymentInfo(prevState => ({
                  ...prevState,
                  state: e.target.value
                }))


              }} 
              />

              <FormInputField 
                label="City" 
                value={paymentInfo?.city} 
                type="text" 
                className="half-width" 
                onChange={(e)=>{

                setPaymentInfo(prevState => ({
                  ...prevState,
                  city: e.target.value
                }))


              }}
              />

              
            </div>

            <FormInputField label="Address" 
              value={paymentInfo?.address}
              type="text"
              onChange={(e)=>{

                setPaymentInfo(prevState => ({
                  ...prevState,
                  address: e.target.value
                }))


              }}
            />

          </div>

          <div className="inner-details-form-action flex-container align-center space-between  wrap">
            <SubmitBtn
              loading={loading}
              className="submit-payment-details half-width"
              text="Proceed to payment"
              onClick={submitAddress}
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
