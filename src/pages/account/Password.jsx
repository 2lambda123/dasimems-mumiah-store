import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { AuthData } from "../../utils/helpers";
import { FormInputField, SubmitBtn } from "../../components";

const Password = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  let password;

  password = watch("password", "");

  // OnSubmit
  const changePassword = async (data) => {
    setLoading(true);

    try {
      const item = AuthData("/change_password", data);

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
          setTimeout(() => {
            window.location.reload();
          }, 1500);
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
    <div className="password">
      <h3 className="title">Update your Password</h3>

      <form className="password-form">
        <FormInputField
          {...register("current_password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum Required length is 8",
            },
            maxLength: {
              value: 20,
              message: "Maximum Required length is 20",
            },
          })}
          placeholder="Enter Current Password"
          errors={
            errors.current_password && (
              <p style={{ color: "red", fontSize: 12 }}>
                {errors.current_password.message}
              </p>
            )
          }
          label="Current password"
          type="password"
        />

        <FormInputField
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum Required length is 8",
            },
            maxLength: {
              value: 20,
              message: "Maximum Required length is 20",
            },
          })}
          placeholder="Password"
          errors={
            errors.password && (
              <p style={{ color: "red", fontSize: 12 }}>
                {errors.password.message}
              </p>
            )
          }
          label="New password"
          type="password"
        />

        <FormInputField
          {...register("password_confirmation", {
            required: "confirm password is required",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          placeholder="Confirm password"
          errors={
            errors.password_confirmation && (
              <p style={{ color: "red", fontSize: 12 }}>
                {errors.password_confirmation.message}
              </p>
            )
          }
          label="Confirm password"
          type="password"
        />

        <SubmitBtn
          onClick={handleSubmit(changePassword)}
          text="Update Password"
          loading={loading}
          className="action-btn"
        />
      </form>
    </div>
  );
};

export default Password;
