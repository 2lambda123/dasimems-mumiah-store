import { Button } from 'antd'
import React, { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { MdClose } from 'react-icons/md'
import FormInputField from './form/FormInputField'
import SubmitBtn from './form/SubmitBtn'
import { useState } from 'react'
import { AuthData } from '../utils/helpers'
import { toast } from 'react-toastify'
import { useProductsContext } from '../contexts/products_context'

const CustomForm = () => {

  const [submitBtnLoading, setSubmitBtnLoading] = useState(false)
  const {closeCustomForm} = useProductsContext()

  const initialValue = useMemo(() => {

    return {
      name: "",
      email: "",
      custom: "",
      brief: ""

    }
    
  }, [])

  const {
          register,
          formState: {errors},
          reset,
          handleSubmit
        } = useForm({
            mode: "onChange",
            defaultValues: initialValue 
        })

  const sendCustomMessage = useCallback((data)=>{
    setSubmitBtnLoading(true)

    AuthData("/custom", data).then((res)=>{

      toast.success(
          "Request placed successfully",
        {
          className: "upper-element",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );

      closeCustomForm();

      reset(initialValue)

    }).catch((err)=>{
      toast.error(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Something went wrong while sending your data",
        {
          className: "upper-element",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }).finally(()=>{
      setSubmitBtnLoading(false)
    })

  }, [initialValue, reset])

  return (
    <div className="custom-form">

      <Button className="custom-form-cancel" onClick={closeCustomForm}>

        <MdClose />

      </Button>

      <form className='custom-form-form-element flex-container space-between wrap'>

        <FormInputField 
          label="Name"
          placeholder="John Doe"
          type="text"
          errors={
            errors.name && <p className='form-err'>{errors.name.message}</p>
          }
          {...register("name", {
            required: "Please input your name",
            pattern: {
              value:  /^[a-zA-Z ]*$/,
              message: "Please Input a valid name"
            },
            minLength: {
              value: 5,
              message: "Name must not be less than 5 characters"
            }
          })}
          className="half-width"
        />

        <FormInputField 
                    
          name="email"
          placeholder="example@example.com"
          label="Email"
          errors={errors.email && (
              <p className="form-err">{errors.email.message}</p>
          )}
          type="email"
          className="half-width"
          {...register("email", {
              required: "Please input your email",
              pattern: {
                  value:  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                  message: "Please Input a valid email"
              }
          })}

      />

      <FormInputField 
          label="Subject"
          placeholder="For..."
          type="text"
          errors={
            errors.custom && <p className='form-err'>{errors.custom.message}</p>
          }
          {...register("custom", {
            required: "Please fill in this field",
            minLength: {
              value: 10,
              message: "Your subject must not be less than 10 characters"
            }
          })}
          className="full-width"
        />

        <FormInputField 
          label="Message"
          placeholder="E.G: Abstract wear, High Fashion, Street Wear..."
          type="text"
          textarea
          errors={
            errors.brief && <p className='form-err'>{errors.brief.message}</p>
          }
          {...register("brief", {
            required: "Please fill in this field"
          })}
          className="full-width"
        />

        <SubmitBtn loading={submitBtnLoading} text="Submit" className="custom-submit-btn full-width" onClick={handleSubmit(sendCustomMessage)} />
        
      </form>
      
    </div>
  )
}

export default CustomForm
