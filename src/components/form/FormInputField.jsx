import { Button} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SelectBox from "./SelectBox";

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
      selectOptions,
      defaultValue,
      ...props
    },
    ref
  ) => {

    const [inputType, setInputType] = useState("");

    if(!selectOptions){

      selectOptions = [];

    }

    if(type === "select" && selectOptions && !Array.isArray(selectOptions)){
      throw new Error("selectedOptions must be of type array");
    }

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
        <div className={`form-field-parent ${className? className: ""}`}>
          <div
            className={`form-field ${row ? "row-field" : null} ${
              reversed ? "reversed-field" : null
            }`}
          >
            <label htmlFor={id}>{label}</label>

            <div className="form-input-field-input">



              {type === "select"? (

                <>

                  <SelectBox 
                    id={id}
                    name={name}
                    className="select"
                    ref={ref}
                    onChange={onChange}
                    {...props}
                    defaultValue={defaultValue? defaultValue: ""}

                    style={{
                      width: "100%",
                    }}
                    options={[{label: "--- Choose ---", value:""}, ...selectOptions]}

                  />

                  

                
                </>
              ) : 
              (
                <input
                  id={id}
                  name={name}
                  ref={ref}
                  type={inputType}
                  placeholder={placeholder}
                  onChange={onChange}
                  {...props}
                />
              )}

              {type === "password" && <Button onClick={setType} className="show-password-btn">{inputType === "password"? <FaEye />: <FaEyeSlash />}</Button>}

            </div>

          </div>
          {errors}

        </div>
      
      </>
    );
  }
);
export default FormInputField;
