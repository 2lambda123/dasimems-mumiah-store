import { Button, Col } from 'antd'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInputField from '../form/FormInputField'
import { AuthData } from '../../utils/helpers'
import { toast } from 'react-toastify'

const ContactForm = () => {

    const initialFormValue = {
        name: "",
        phone: "",
        email: "",
        subject: "",
        content: ""
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: initialFormValue,
        mode: "onChange"
    });

    const [submitLoading, setSubmitLoading] = useState(false)

    const submitMessage = useCallback((data)=>{

        setSubmitLoading(true)
        var newPhoneNumber = data.phone.replace("+234", "234");
        var sentData = { ...data, phone: newPhoneNumber};

        AuthData("/contact",sentData).then((res)=>{

            toast.success(
                "We've received your message and will get back to you shortly",
                {
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

            reset(initialFormValue)

        }).catch((err)=>{
            toast.error(
                err?.response?.data?.message
                  ? err?.response?.data?.message
                  : "Something went wrong while sending your data",
                {
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
            setSubmitLoading(false)
        })

    }, [])

  return (
    <Col
        span={11}
        lg={{ span: 11 }}
        md={{ span: 11 }}
        xs={{ span: 24 }}
        className="contact-content-details"
    >
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit(submitMessage);
        }}>

            <div className="form-content flex-container space-between wrap">

            
                <FormInputField 
                    {...register("name", {
                        required: "Please input your name",
                        pattern: {
                            value:  /^[a-zA-Z ]*$/,
                            message: "Please Input a valid name"
                        }
                    })}
                    name="name"
                    placeholder="Example Doe"
                    label="Full name"
                    className="half-width"
                    errors={errors.name && (
                        <p className="form-err">{errors.name.message}</p>
                    )}

                />

                <FormInputField 
                    {...register("phone", {
                        required: "Please input your mobile number",
                        pattern: {
                            value:
                            /(^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$)/,
                            message: "Invalid phone number detected",
                        }
                    })}
                    name="phone"
                    placeholder="+2340000000000"
                    label="Phone number"
                    className="half-width"
                    errors={errors.phone && (
                        <p className="form-err">{errors.phone.message}</p>
                    )}

                />


            </div>

             <div className="form-content flex-container column">

            
                <FormInputField 
                    {...register("email", {
                        required: "Please input your email",
                        pattern: {
                            value:  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                            message: "Please Input a valid email"
                        }
                    })}
                    name="email"
                    placeholder="example@example.com"
                    label="Email"
                    errors={errors.email && (
                        <p className="form-err">{errors.email.message}</p>
                    )}

                />


                


            </div>

            
            <div className="form-content flex-container column">

        
                <FormInputField 
                    {...register("subject", {
                        required: "This field is required",
                        
                    })}
                    name="subject"
                    placeholder="Messaging on..."
                    label="Subject"
                    errors={errors.subject && (
                        <p className="form-err">{errors.subject.message}</p>
                    )}

                />

            </div>

            <div className="form-content flex-container column">

        
                <FormInputField 
                    {...register("content", {
                        required: "This field is required",
                        
                    })}
                    textarea
                    name="content"
                    placeholder="Your message..."
                    label="Message"
                    errors={errors.content && (
                        <p className="form-err">{errors.content.message}</p>
                    )}

                />

            </div>
            
        </form>

        

        <div className="form-content flex-container column align-start">
        <Button loading={submitLoading} className="submit-btn" onClick={handleSubmit(submitMessage)}>
            Send Message
        </Button>
        </div>
    </Col>
  )
}

export default ContactForm
