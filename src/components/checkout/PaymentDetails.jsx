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
import { useForm } from "react-hook-form";

const PaymentDetails = () => {

  const {reset, register, handleSubmit, formState: {errors}, getValues} = useForm({
    defaultValue: {
      phone: "",
      email: localStorage.getItem("userEmail")? localStorage.getItem("userEmail") : "",
      country: "",
      state: "",
      city: "",
      address: "",
      optional_address: ""
    },
    mode: "onChange"
  })
  const [allAddress, setAllAddress] = useState([])
  const [activeContent, setActiveContent] = useState("contact");
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const name = localStorage.getItem("userName");

  const submitAddress = useCallback((data)=>{
    setLoading(true)



  }, [])

  useEffect(()=>{

    GetData("/addresses").then((res)=>{

      setAllAddress(res.data);

      if(res.data.length > 0){

        reset(res.data[0]);

      }

    })

    

    axios.get("https://countriesnow.space/api/v0.1/countries/states").then(res=>{
      var countries = res.data;
      setCountryList(countries.data)
    })


  }, [])

  useEffect(()=>{

    const data = countryList.filter(country => country.name === getValues("country"))

    if(Array.isArray(data) && data.length > 0){

      setStateList(data[0].states);
    }

  }, [])

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
          subtitleTwo={getValues("phone")}
        >
          <div className="inner-details-header flex-container space-between align-center">
            <h2 className="title">Contact Information</h2>
          </div>

          <div className="inner-details-form">
            <FormInputField 
              {...register("phone", {
                    required: "Your phone number is required",
                    pattern: {
                      value: /(^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$)/,
                      message: "Invalid phone number detected"

                    },

                  })}
              label="Your Phone Number" 
              type="tel"
              errors={
                errors.phone && (
                  <p style={{ color: "red", fontSize: 12 }}>
                    {errors.phone.message}
                  </p>
                )}
              
            />

            <FormInputField 
               {...register("email", {
                    required: "Your email address is required",
                    pattern: {
                      value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                      message: "Invalid email detected"

                    },

                  })}
              label="Email address" 
              type="email"errors={
                errors.email && (
                  <p style={{ color: "red", fontSize: 12 }}>
                    {errors.email.message}
                  </p>
                )}
              
            
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
          subtitleOne={getValues("address")}
        >
          <div className="inner-details-form">

              <FormInputField
                {...register("country", {
                      required: "Please choose a country",
                      onChange: (e) => {

                        const data = countryList.filter(country => country.name === e.target.value)

                        if(Array.isArray(data) && data.length > 0){

                          setStateList(data[0].states);
                        }


                      }
                      

                    })}
                label="Country"
                type="select"
                selectOptions={countryList.map(country => ({label: country?.name, value: country?.name}))}
                errors={
                  errors.country && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.country.message}
                    </p>
                  )}
            />

            <div className="inner-details-form-split flex-container space-between align-center wrap">
              <FormInputField 
                {...register("state", {
                        required: "Please choose a state",
                        

                      })}
                label="State" 
                type="select" 
                selectOptions={stateList.map(country => ({label: country?.name, value: country?.name}))}
                className="half-width"
                errors={
                  errors.state && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.state.message}
                    </p>
                  )}
                

              />

              <FormInputField
                {...register("city", {
                      required: "Please enter your city",
                      

                    })} 
                label="City" 
                type="text" 
                className="half-width" 
                errors={
                  errors.city && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.city.message}
                    </p>
                  )}
              />

              
            </div>

            <FormInputField label="Address"
              {...register("address", {
                        required: "Please enter your address",
                        

                      })}  
              type="text"
              errors={
                  errors.address && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.address.message}
                    </p>
                  )}
            />

          </div>

          <div className="inner-details-form-action flex-container align-center space-between  wrap">
            <SubmitBtn
              loading={loading}
              className="submit-payment-details half-width"
              text="Proceed to payment"
              onClick={handleSubmit(submitAddress)}
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
