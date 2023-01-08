import React from "react";

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
      ...props
    },
    ref
  ) => {
    return (

      <>
        <div
          className={`form-field ${row ? "row-field" : null} ${
            reversed ? "reversed-field" : null
          }`}
        >
          <label>{label}</label>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
          />
        </div>
        {errors}
      
      </>
    );
  }
);
export default FormInputField;
