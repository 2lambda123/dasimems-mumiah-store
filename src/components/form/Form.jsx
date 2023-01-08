import React, { useState } from 'react'
import FormInputField from './FormInputField';
import { useEffect } from 'react';
import { useRef } from 'react';

const Form = ({ data }) => {

    const [formState, setFormState] = useState({})
    const [updated, setUpdated] = useState(true)
    const inputRef = useRef("");
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

    if(!updated){

      onFormChange(formState);
      setUpdated(true)
    }

  }, [formState, onFormChange, updated])

  useEffect(()=>{
    var data = {};

    inputs.forEach((input)=>{
      var {name, value} = input || {}

      if(!data[name]){

        data[name] = value;

      }
              
            
    })
    setFormState(prevState => ({...prevState, ...data}))
  }, [inputs])

  useEffect(()=>{
    inputRef.current.focus();

  }, [])

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
          } = input || {}

          if(!onChange){
            onChange= () => {

            }
          }

          
          return (
            <FormInputField
              inputRef={index === 0? inputRef: null}
              label={label}
              value={value}
              onValueChange={(e)=>{
                onChange(e);
                setFormState(prevState => ({...prevState, [name]: e.target.value}));
                setUpdated(false);
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
