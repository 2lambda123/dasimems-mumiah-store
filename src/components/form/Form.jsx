import React from 'react'
import FormInputField from './FormInputField'

const Form = ({ data }) => {
//   var data = {
//     inputs: [
//       {
//         label: '',
//         value: '',
//         onChange: (e) => {},
//         placeholder: '',
//         type: '',
//         name: '',
//         row: '',
//         required: '',
//         className: '',
//       },
//     ],
//     formTitle: '',  
//     formTopContent: ""
//   }
  var { formTitle, inputs, formTopContent } = data || {}

  return (
    <div className="form-container">
      <h2 className="form-title">{formTitle}</h2>
      {formTopContent}

      <div className="form-container-content">
        {inputs?.map((input, index) => {
          var {
            label,
            value,
            onChange,
            placeholder,
            type,
            name,
            row,
            required,
            className,
            reverse
          } = input
          return (
            <FormInputField
              label={label}
              value={value}
              onValueChange={onChange}
              placeholder={placeholder}
              type={type}
              name={name}
              row={row}
              required={required}
              className={className}
              key={index}
              reversed={reverse}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Form
