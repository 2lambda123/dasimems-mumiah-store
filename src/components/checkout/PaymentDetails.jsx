import { Col } from "antd";
import React, { useEffect, useState } from "react";
import PaymentDetailsContent from "./inner/PaymentDetailsContent";
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import { FaPlus, FaRegCreditCard, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiDirectionLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import FormInputField from "../form/FormInputField";
import SubmitBtn from "../form/SubmitBtn";
import { AuthData, GetData } from "../../utils/helpers";
import { useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "../common/Modal";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import { useCartContext } from "../../contexts/cart_context";
import { Navigate, useNavigate } from "react-router-dom";
import { routeName } from "../../utils/constant";

const PaymentDetails = () => {
  const initialFormValue = {
      phone: "",
      email: localStorage.getItem("userEmail")
        ? localStorage.getItem("userEmail")
        : "",
      country: "Nigeria",
      state: "",
      city: "",
      address: "",
      optional_address: "",
    }
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
    getValues,
  } = useForm({
    defaultValue: initialFormValue,
    mode: "onChange",
  });
  const [allAddress, setAllAddress] = useState([]);
  const [activeAddress, setActiveAddress] = useState("");
  const [activeAddressDetails, setActiveAddressDetails] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [deliveryStation, setDeliveryStation] = useState([]);
  const [activeDeliveryStation, setActiveDeliveryStation] = useState("");
  const [deliveryFoundErr, setDeliveryFoundErr] = useState("")
  const [activeContent, setActiveContent] = useState("contact");
  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [openContent, setOpenContent] = useState(true);
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [paymentModalOpened, setPaymentModalOpened] = useState(false);
  const {cart} = useCartContext();
  const navigate = useNavigate();

  const name = localStorage.getItem("userName");


  const proceedToPayment = useCallback(() => {

    const data = {
      delivery_station: activeDeliveryStation,
      items: cart.map((cartItem => ({quantity: cartItem.amount, size: cartItem.sizes, product: cartItem.id})))
    }

    AuthData(`/carts/${activeAddress}`, data).then((res) => {

      setPaymentDetails(res.data.invoice);
      setPaymentModalOpened(true)


    }).catch((err)=>{

      toast.error(
          err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something went wrong while processing your request",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );


    }).finally(()=>{
      setLoading(false)
    })

  }, [activeDeliveryStation, activeAddress, cart]);

  const submitAddress = useCallback(
    (data) => {
      setLoading(true);

      var newPhoneNumber = data.phone;

      newPhoneNumber = data.phone.replace("+234", "234");
      var sentData = { ...data, phone: newPhoneNumber, country: "Nigeria" };

      if(deliveryFoundErr === ""){

        if (activeAddress !== "") {
          proceedToPayment();
        } else {
          AuthData("/addresses", sentData)
            .then((res) => {
              setAllAddress((prevAddress) => [...prevAddress, res.data]);
              setActiveAddress(res?.data?.id);
  
              toast.success("Address saved successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              proceedToPayment();
            })
            .catch((err) => {
              toast.error(
                err?.response?.data?.message
                  ? err?.response?.data?.message
                  : "Something went wrong while saving your address",
                {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
              setLoading(false)
            })

        }
      }else{
        toast.error(
          "Please choose a different address",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );

        setLoading(false)
      }

    },
    [activeAddress, deliveryFoundErr, proceedToPayment]);

  const checkAddress = useCallback(()=>{

    var city = getValues("city")?.toLowerCase()
    var state = getValues("state")?.toLowerCase().replace("state", "").trim();

    var availableDelivery = deliveryStation.filter(delivery => delivery.city.toLowerCase() === city && delivery.state.toLowerCase() === state);

    if(availableDelivery.length > 0){
      setDeliveryFoundErr("");
      setActiveDeliveryStation(availableDelivery[0].id)
    }else{
      setActiveDeliveryStation("");
      setDeliveryFoundErr("Sorry We don't deliver to the chosen address");
    }


  }, [getValues, deliveryStation]);


  useEffect(() => {

    

    GetData("/delivery_stations").then(res => {

      setDeliveryStation(res?.data?.stations);
      setCityList(res?.data?.stations.map(station => ({label: station?.city, value: station?.city})))

      
      
    })

    GetData("/addresses").then((res) => {
      setAllAddress(res.data.addresses);

      if (res.data.addresses.length > 0) {
        reset(res.data.addresses[0]);
        setActiveAddressDetails(res.data.addresses[0]);
        setActiveAddress(res.data.addresses[0].id);
        
        checkAddress();

      }
      
    });

    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        var countries = res.data;
        setCountryList(countries.data);
      });


  }, [reset, getValues]);

  useEffect(()=>{

    checkAddress();

  }, [deliveryStation])

  useEffect(() => {
    const data = countryList.filter(
      (country) => country.name.toLowerCase() === "nigeria"
    );

    if (Array.isArray(data) && data.length > 0) {
      setStateList(data[0].states);
    }
  }, [countryList]);

  const checkIfValueChanged = useCallback(()=>{
    var newEmail = getValues("email");
    var newPhone = getValues("phone");
    var newCountry = getValues("country");
    var newState = getValues("state");
    var newCity = getValues("city");
    var newAddress = getValues("address");

    

    var secondAddress = allAddress.filter(address => address.email === newEmail && address.phone === newPhone && address.country === newCountry && address.state === newState && address.city === newCity && address.address === newAddress)


    if(secondAddress.length > 0){

      
      setActiveAddress(secondAddress[0].id);

    }else{

      
      setActiveAddress("");

    }

  }, [getValues, allAddress])


  if(cart.length < 1){
    return <Navigate to={routeName.products} replace />
  }

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
          contentOpen={openContent}
          icon={<FaRegUserCircle />}
          title="Contact Info"
          subtitleOne={name}
          subtitleTwo={getValues("phone")}
          buttonActionText={allAddress.length > 0 ? "Change Address" : null}
          buttonAction={() => {
            setModalOpened(true);
          }}
        >
          <div className="inner-details-header flex-container space-between align-center">
            <h2 className="title">Contact Information</h2>
          </div>

          <div className="inner-details-form">

            

            <div className="inner-details-form-split flex-container space-between align-center wrap">
              <FormInputField
                {...register("phone", {
                  required: "Your phone number is required",
                  pattern: {
                    value:
                      /(^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$)/,
                    message: "Invalid phone number detected",
                  },
                })}
                label="Your Phone Number"
                type="tel"
                onChange={()=>{
                  checkIfValueChanged();
                }}
                errors={
                  errors.phone && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.phone.message}
                    </p>
                  )
                }
                className="half-width"
              />

              <FormInputField
                {...register("email", {
                  required: "Your email address is required",
                  pattern: {
                    value:
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    message: "Invalid email detected",
                  },
                })}
                label="Email address"
                type="email"
                onChange={()=>{
                  checkIfValueChanged();
                }}
                errors={
                  errors.email && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.email.message}
                    </p>
                  )
                }
                className="half-width"
              />

            </div>
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
          contentOpen={openContent}
          icon={<RiDirectionLine />}
          title="Shipping Address"
          subtitleOne={getValues("address")}
        >
          <div className="inner-details-form">
            {/* <FormInputField
              {...register("country", {
                required: "Please choose a country",
                onChange: (e) => {
                  const data = countryList.filter(
                    (country) => country.name === e.target.value
                  );

                  if (Array.isArray(data) && data.length > 0) {
                    setStateList(data[0].states);
                  }
                },
              })}
              label="Country"
              type="select"
              selectOptions={countryList.map((country) => ({
                label: country?.name,
                value: country?.name,
              }))}
              errors={
                errors.country && (
                  <p style={{ color: "red", fontSize: 12 }}>
                    {errors.country.message}
                  </p>
                )
              }
            /> */}

            {deliveryFoundErr !== "" && <p className="err-text">

              <span className="icon"><BsFillExclamationTriangleFill /></span>

              <span className="text">{deliveryFoundErr}</span>
              
            </p>}

            <div className="inner-details-form-split flex-container space-between align-center wrap">
              <FormInputField
                {...register("state", {
                  required: "Please choose a state",
                })}
                label="State"
                type="select"
                value={getValues("state")}
                onChange={(e)=>{
                  setValue('state', e, { shouldValidate: true })
                  checkAddress();
                  checkIfValueChanged();

                }}
                defaultValue={getValues("state")}
                selectOptions={stateList.map((country) => ({
                  label: country?.name,
                  value: country?.name,
                }))}
                className="half-width"
                errors={
                  errors.state && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.state.message}
                    </p>
                  )
                }
              />

              <FormInputField
                {...register("city", {
                  required: "Please enter your city",
                })}
                label="City"
                type="select"
                value={getValues("city")}
                onChange={(e)=>{
                  setValue('city', e, { shouldValidate: true })
                  checkAddress();
                  checkIfValueChanged();

                }}
                className="half-width"
                selectOptions={cityList}
                errors={
                  errors.city && (
                    <p style={{ color: "red", fontSize: 12 }}>
                      {errors.city.message}
                    </p>
                  )
                }
              />
            </div>

            <FormInputField
              label="Address"
              {...register("address", {
                required: "Please enter your address",
              })}
              type="text"
              onChange={()=>{
                checkIfValueChanged();
              }}
              errors={
                errors.address && (
                  <p style={{ color: "red", fontSize: 12 }}>
                    {errors.address.message}
                  </p>
                )
              }
            />
          </div>

          <div className="inner-details-form-action flex-container align-center space-between  wrap">
            <SubmitBtn
              loading={loading}
              className="submit-payment-details half-width"
              text="Save & Proceed to payment"
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

        <Modal modalOpened={modalOpened} className="change-address-modal">
          <div className="change-address-container">
            <button
              className="cancel-change-address-container"
              onClick={() => {
                setModalOpened(false);
              }}
            >
              <MdClose />
            </button>

            <h2>Choose Your preferred address</h2>

            <div className="change-address-form">
              {allAddress.map((address, index) => {
                var { address: addressName, id } = address;
                return (
                  <FormInputField
                    label={
                      <>
                        <p>Address {index + 1}</p>
                        <p className="address-name">{addressName}</p>
                      </>
                    }
                    type="radio"
                    key={index}
                    reversed
                    row
                    checked={activeAddress === id}
                    name="address"
                    onChange={() => {
                      reset(address);
                      setActiveAddressDetails(address);
                      setActiveAddress(id);
                      setModalOpened(false);
                      checkAddress()
                    }}
                  />
                );
              })}
            </div>

            <div className="change-address-action flex-container align-center justify-center">
              <button
                onClick={() => {
                  setOpenContent(true);
                  setModalOpened(false);
                  setActiveAddress("");
                  reset(initialFormValue);
                }}
              >
                <span className="text">Add new address </span>
                <span className="icon">
                  <FaPlus />{" "}
                </span>
              </button>
            </div>
          </div>
        </Modal>

        <Modal modalOpened={paymentModalOpened} className="change-address-modal">

          {paymentDetails && <div className="change-address-container flex-container column align-center">

            <p>Please Click the below link to complete your payment</p>

            <a onClick={()=>{
              navigate(`${routeName.account}/orders`)
            }} href={paymentDetails?.checkout} className="button proceed-top-payment-link" target="_blank" rel="noreferrer">Proceed to make payment</a>

          </div>}

        </Modal>
      </Col>
    </>
  );
};

export default PaymentDetails;
