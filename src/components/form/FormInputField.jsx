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
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    return (

      <>
        <div
          className={`form-field ${row ? "row-field" : null} ${
            reversed ? "reversed-field" : null
          } ${className? className : ""}`}
        >
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={name}
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
