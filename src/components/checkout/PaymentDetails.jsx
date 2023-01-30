import { Col } from "antd";
import React, { useEffect, useState } from "react";
import PaymentDetailsContent from "./inner/PaymentDetailsContent";
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

import { usePaystackPayment } from "react-paystack";

const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaymentDetails = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValue: {
      phone: "",
      email: localStorage.getItem("userEmail")
        ? localStorage.getItem("userEmail")
        : "",
      country: "Nigeria",
      state: "",
      city: "",
      address: "",
      optional_address: "",
    },
    mode: "onChange",
  });
  const [allAddress, setAllAddress] = useState([]);
  const [activeAddress, setActiveAddress] = useState("");
  const [activeContent, setActiveContent] = useState("contact");
  const [countryList, setCountryList] = useState([]);
  const [openContent, setOpenContent] = useState(true);
  const [stateList, setStateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: localStorage.getItem("userEmail"),
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
  };

  const initializePayment = usePaystackPayment(config);

  const name = localStorage.getItem("userName");

  const proceedToPayment = useCallback(() => {
    initializePayment(onSuccess, onClose);
  }, [activeAddress]);

  const submitAddress = useCallback(
    (data) => {
      setLoading(true);

      var newPhoneNumber = data.phone;

      newPhoneNumber = data.phone.replace("+234", "234");
      console.log(newPhoneNumber);
      var sentData = { ...data, phone: newPhoneNumber };

      if (activeAddress !== "") {
        proceedToPayment();
      } else {
        AuthData("/addresses", sentData)
          .then((res) => {
            setAllAddress((prevAddress) => [...prevAddress, res.data]);
            setActiveAddress(res.data.id);

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
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
    [activeAddress]
  );

  useEffect(() => {
    GetData("/addresses").then((res) => {
      setAllAddress(res.data.addresses);

      if (res.data.addresses.length > 0) {
        reset(res.data.addresses[0]);
        setActiveAddress(res.data.addresses[0].id);
      }
    });

    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        var countries = res.data;
        setCountryList(countries.data);
      });
  }, []);

  useEffect(() => {
    const data = countryList.filter(
      (country) => country.name.toLowerCase() === "nigeria"
    );

    if (Array.isArray(data) && data.length > 0) {
      setStateList(data[0].states);
    }
  }, [countryList]);

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

            <div className="inner-details-form-split flex-container space-between align-center wrap">
              <FormInputField
                {...register("state", {
                  required: "Please choose a state",
                })}
                label="State"
                type="select"
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
                type="text"
                className="half-width"
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
              onCLick={() => {
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
                    reversed
                    row
                    checked={activeAddress === id}
                    name="address"
                    onChange={() => {
                      reset(address);
                      setActiveAddress(id);
                      setModalOpened(false);
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
                  reset({
                    phone: "",
                    email: localStorage.getItem("userEmail")
                      ? localStorage.getItem("userEmail")
                      : "",
                    country: "",
                    state: "",
                    city: "",
                    address: "",
                    optional_address: "",
                  });
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
      </Col>
    </>
  );
};

export default PaymentDetails;
