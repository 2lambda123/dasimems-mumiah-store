import React, { useState } from 'react'
import FormInputField from './FormInputField';
import { useEffect } from 'react';

const Form = ({ data }) => {

    const [formState, setFormState] = useState({})
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
//     formTopContent: "",
//     onFormChange: ()={}
//   }
  var { formTitle, inputs, formTopContent, onFormChange } = data || {}

  if(!onFormChange){
    onFormChange = ()=>{

    }
  }

  useEffect(()=>{

    onFormChange(formState);

  }, [formState, onFormChange])

  return (
    <div className="form-container">
      {formTopContent}
      <h2 className="form-title">{formTitle}</h2>

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

          if(!onChange){
            onChange= () => {

            }
          }

          if(name){
            setFormState(prevState => ({...prevState, [name]: value}))
          }
          return (
            <FormInputField
              label={label}
              value={value}
              onValueChange={(e)=>{
                onChange(e);
                setFormState(prevState => ({...prevState, [name]: e.target.value}));
            }}
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
