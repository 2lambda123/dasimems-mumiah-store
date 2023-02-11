import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';

const SelectBox = ({onChange, value, options, searchEnabled, className, onBlur, defaultValue, ...props}) => {

    const [fieldLabel, setFieldLabel] = useState("");
    const [dropdownEnabled, setDropdownEnabled] = useState(false);

    if(!options || !Array.isArray(options)){
        options = [];
    }

    useEffect(()=>{

         var val = options.filter(val => val.value === defaultValue);

          if(val.length > 0){
            setFieldLabel(val[0].label)
        }else{
            setFieldLabel("-- Choose --");

        }

    }, [defaultValue, options])

    useEffect(() => {
        var defValueLabel = options.filter(val => val.value === value);

        if(defValueLabel.length > 0){
            setFieldLabel(defValueLabel[0].label)
        }else{
            setFieldLabel("-- Choose --");

        }

    }, [value, options])

  return (
    <div className={`select-input-field-container ${className? className: ""}`}>

        <div className={`select-input-field flex-container align-center ${searchEnabled? "search-enabled" : ""}`}>

            <input  {...props} value={fieldLabel} onFocus={()=>{
                setDropdownEnabled(true)
            }} onBlur={(e)=>{
                onBlur(e)
                setTimeout(()=>{

                    setDropdownEnabled(false)
                }, 100)
            }} onChange={(e)=>{
                setFieldLabel(e.target.value);
                var valueToSend = options.filter(val => val.label === e.target.value);

                if(valueToSend.length > 0){

                    onChange(valueToSend[0].value)
                }
            }} readOnly={searchEnabled? false: true} />
            <div className="input">{fieldLabel}</div>
            

            

            <span className='icon'>
                <FaAngleDown />
            </span>

        </div>

        <ul className={`select-dropdown ${dropdownEnabled? "dropdown-shown": ""}`}>

            {options.map((option, index) => {
                var {label, value} = option;

                return(
                    <li key={index} className='list-style-none' onClick={()=>{
                        onChange(value)
                        setFieldLabel(label);
                    }}>{label}</li>

                )
            })}
            
        </ul>


        
      
    </div>
  )
}

export default SelectBox
