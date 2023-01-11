import { Col } from 'antd'
import React, { useState } from 'react'
import PaymentDetailsContent from './inner/PaymentDetailsContent'
import { FaRegCreditCard, FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { RiDirectionLine } from 'react-icons/ri'
import { BiWorld } from 'react-icons/bi'
import FormInputField from '../form/FormInputField'
import SubmitBtn from '../form/SubmitBtn'

const PaymentDetails = () => {
    const [paymentType, setPaymentType] = useState("card")
    const [activeContent, setActiveContent] = useState("contact")
  return (
    <>
    
        
        <Col span={14} order={1} lg={{span: 14, order: 1}} xs={{span: 24, order: 2}} className="payment-details">

            <PaymentDetailsContent
                contentOpen={activeContent === "contact"}
                icon={<FaRegUserCircle />}
                title="Contact Info"
                subtitleOne="Enrico Smith"
                subtitleTwo="+855 - 666 - 7744"

            >

                <div className="inner-details-header flex-container space-between align-center">

                    <h2 className='title'>Contact Information</h2>

                </div>

                <div className='inner-details-form'>
                    <FormInputField 
                        label="Your phone number"
                        type="tel"
                    />

                    <FormInputField 
                        label="Email address"
                        type="email"
                    />
                </div>

                <div className='inner-details-form-action flex-container align-center space-between wrap'>
                    <SubmitBtn className="submit-payment-details half-width" text="Save and next to shipping" onClick={()=>{
                        setActiveContent("address")
                    }}/>

                    <SubmitBtn className="half-width" text="Cancel" onClick={()=>{
                        setActiveContent("")
                    }} />
                </div>

            </PaymentDetailsContent>

            <PaymentDetailsContent
                contentOpen={activeContent === "address"}
                icon={<RiDirectionLine />}
                title="Shipping Address"
                subtitleOne="St. Paul's Road, Norris, SD 57560, Dakota, USA"
            >


                <div className='inner-details-form'>

                    <FormInputField 
                        label="Address"
                        type="text"
                        
                    />

                    <div className='inner-details-form-split flex-container space-between align-center wrap'>

                        <FormInputField 
                            label="City"
                            type="text"
                            className="half-width"
                            
                        />

                        <FormInputField 
                            label="Country"
                            type="text"
                            className="half-width"
                        />

                    </div>
                </div>

                <div className='inner-details-form-action flex-container align-center space-between  wrap'>
                    <SubmitBtn className="submit-payment-details half-width" text="Save and next to Payment" onClick={()=>{
                        setActiveContent("payment")
                    }} />

                    <SubmitBtn className="half-width" text="Cancel" onClick={()=>{
                        setActiveContent("")
                    }} />
                </div>

            </PaymentDetailsContent>

            <PaymentDetailsContent
                contentOpen={activeContent === "payment"}
                icon={<AiOutlineCreditCard />}
                title="Payment Method"
                subtitleOne="Google / Apple Wallet"
                subtitleTwo="xxx-xxx-xx55"
            >

                <div className='inner-details-form'>
                    <FormInputField 
                        label={
                            <>

                                <div className="flex-container align-center">

                                    <div className='payment-details-label-icon  flex-container align-center justify-center'>
                                        <FaRegCreditCard />
                                    </div>

                                    <div className="payment-details-label-text">

                                        <p>Debit / Credit Card</p>

                                    </div>

                                </div>
                            
                            </>
                        }
                        type="radio"
                        reversed
                        row
                        className="align-center"
                        id="card"
                        name="payment-type"
                        value="card"
                        checked={paymentType === "card"}
                        onChange={(e)=>{
                            setPaymentType(e.target.value);
                        }}
                    />

                    {paymentType === "card" && (

                        <>
                        
                            <FormInputField 
                                label="Card Number"
                                type="number"
                            />

                            <FormInputField 
                                label="Name on card"
                                type="text"
                            />

                            <div className='inner-details-form-split flex-container space-between align-center wrap'>


                                <FormInputField 
                                    label="Expiration Date"
                                    type="text"
                                    className="half-width"
                                    placeholder="MM/YY"
                                />

                                <FormInputField 
                                    label="CVC"
                                    type="text"
                                    className="half-width"
                                    placeholder="E.G 123"
                                />

                            </div>
                        </>

                    )}


                </div>

                <div className='inner-details-form'>
                    <FormInputField 
                        label={
                            <>

                                <div className="flex-container align-center">

                                    <div className='payment-details-label-icon flex-container align-center justify-center'>
                                        <BiWorld />
                                    </div>

                                    <div className="payment-details-label-text">

                                        <p>Local Banks</p>

                                    </div>

                                </div>
                            
                            </>
                        }
                        type="radio"
                        reversed
                        row
                        className="align-center"
                        id="bank"
                        name="payment-type"
                        value="bank"
                        checked={paymentType === "bank"}
                        onChange={(e)=>{
                            setPaymentType(e.target.value);
                        }}
                    />

                    {paymentType === "bank" && <div className="bank-details">
                        <p>Your Order will be delivered to you after you make transfer to</p>

                        <div className="bank-details-content flex-container align-center">
                            <p className='bank-details-title'>Bank Name:</p>
                            <p className='bank-details-value'>Bank Name</p>
                        </div>

                        <div className="bank-details-content flex-container align-center">
                            <p className='bank-details-title'>Account Name:</p>
                            <p className='bank-details-value'>Account Name</p>
                        </div>

                        <div className="bank-details-content flex-container align-center">
                            <p className='bank-details-title'>Account Number</p>
                            <p className='bank-details-value'>Account Number</p>
                        </div>
                    </div>}

                </div>

                <div className='inner-details-form-action flex-container align-center space-between  wrap'>
                    <SubmitBtn className="submit-payment-details half-width" text="Confirm Order" />

                    <SubmitBtn className="half-width" text="Cancel" onClick={()=>{
                        setActiveContent("")
                    }} />
                </div>

            </PaymentDetailsContent>
        </Col>

    </>
  )
}

export default PaymentDetails
