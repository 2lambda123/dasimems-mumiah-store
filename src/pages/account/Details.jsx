import { Row } from 'antd'
import React from 'react'
import { FormInputField, SubmitBtn } from '../../components'
import { BiImageAdd } from 'react-icons/bi'

const Details = () => {
  return (
    <div className='account'>

        
        <h3 className="title">Account information</h3>

        <Row justify="space-between" className="account-information">

            <div className='account-profile-image-container'>

                <div className='profile-image'>

                    <div className='overlay flex-container align-center justify-center'>

                        <label htmlFor='select-image' className='flex-container align-center justify-center column'>

                            <span className="icon"><BiImageAdd /></span>
                            <span className="text">Change Image</span>

                            <input type="file" id="select-image" accept='images/jpeg' />

                            
                        </label> 

                    </div>

                </div>

            </div>

            <div className='account-profile-details-form'>
                <FormInputField
                    label="Full Name"
                    type="text"
                    
                />

                <FormInputField
                    label="Email"
                    type="email"
                    
                />

                <SubmitBtn text="Update Account" className="action-btn"/>

            </div>

        </Row>

        
      
    </div>
  )
}

export default Details
