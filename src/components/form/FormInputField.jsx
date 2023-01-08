<<<<<<< HEAD
import React from 'react'

const FormInputField = ({
  label,
  name,
  onValueChange,
  required,
  placeholder,
  type,
  value,
  row,
  reversed,
  inputRef,
  ...props
}) => {

  if(!onValueChange){
    onValueChange = ()=>{}

  }
  return (
    <div {...props} className={`form-field ${row ? 'row-field' : null} ${reversed ? 'reversed-field' : null}`}>
      <label htmlFor={name? name: "form-input"}>{label? label: "Form label"}</label>

      <input
        ref={inputRef}
        id={name? name: "form-input"}
        type={type? type: "text"}
        value={value? value: ""}
        placeholder={placeholder? placeholder: "Input Placeholder"}
        onChange={(e) => {
          onValueChange(e)
        }}
      />
    </div>
  )
}

export default FormInputField
