import { Row } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import { toast } from "react-toastify";

import { AuthData } from "../../utils/helpers";
import { FormInputField, SubmitBtn } from "../../components";

const Details = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // OnSubmit
  const accountUpdate = async (data) => {
    setLoading(true);

    try {
      const item = AuthData("/account", data);

      item
        .then((res) => {
          toast.success(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoading(false);
        })
        .catch((err) => {
          //log error to toast
          const errMsg = err?.response?.data?.message;
          toast.error(errMsg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => setLoading(false), 1500);
        });
    } catch (err) {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  return (
    <div className="account-information-container">
      <h3 className="title">Account information</h3>

      <Row justify="space-between" className="account-information">
        {/* <div className="account-profile-image-container">
          <div className="profile-image">
            <div className="overlay flex-container align-center justify-center">
              <label
                htmlFor="select-image"
                className="flex-container align-center justify-center column"
              >
                <span className="icon">
                  <BiImageAdd />
                </span>
                <span className="text">Change Image</span>

                <input type="file" id="select-image" accept="images/jpeg" />
              </label>
            </div>
          </div>
        </div> */}

        <form className="account-profile-details-form">
          <FormInputField
            {...register("name", {
              required: "Your name is required",
            })}
            placeholder="Enter Your Full Name"
            label="Full Name"
            type="text"
            errors={
              errors.name && (
                <p style={{ color: "red", fontSize: 12 }}>
                  {errors.name.message}
                </p>
              )
            }
          />

          <FormInputField
            {...register("email", {
              required: "Your email is required",
            })}
            placeholder="Enter Your Email address"
            label="Email address"
            type="email"
            errors={
              errors.email && (
                <p style={{ color: "red", fontSize: 12 }}>
                  {errors.email.message}
                </p>
              )
            }
          />

          <SubmitBtn
            loading={loading}
            onClick={handleSubmit(accountUpdate)}
            text="Update Account"
            className="action-btn"
          />
        </form>
      </Row>
    </div>
  );
};

export default Details;
