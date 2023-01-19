import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInputField = React.forwardRef(
  (
    {
      label,
      placeholder,
      type,
      row,
      errors,
      onChange,
      reversed,
      register,
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {

    const [inputType, setInputType] = useState("");

    useEffect(()=>{

      setInputType(type)

    }, [type])

    const setType = useCallback(() => {

      var newType = "text";

      if(inputType === "text"){
        newType = "password";
      }

      setInputType(newType)

    }, [inputType])

    return (

      <>
        <div
          className={`form-field ${row ? "row-field" : null} ${
            reversed ? "reversed-field" : null
          } ${className? className : ""}`}
        >
          <label htmlFor={id}>{label}</label>

          <div className="form-input-field-input">

            <input
              id={id}
              name={name}
              ref={ref}
              type={inputType}
              placeholder={placeholder}
              onChange={onChange}
              {...props}
            />

            {type === "password" && <Button onClick={setType} className="show-password-btn">{inputType === "password"? <FaEye />: <FaEyeSlash />}</Button>}

          </div>
        </div>
        {errors}
      
      </>
    );
  }
);
export default FormInputField;
