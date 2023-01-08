import React from 'react'
import { FormInputField, SubmitBtn } from '../../components'

const Password = () => {
  return (
    <div className='password'>

        <h3 className='title'>Update your Password</h3>

        <div className='password-form'>

            <FormInputField
                label="Current password"
                
            />

            <FormInputField
                label="New password"
                
            />

            <FormInputField
                label="Confirm password"
                
            />

            <SubmitBtn text="Update Password" className="action-btn"/>

        </div>

      
    </div>
  )
}

export default Password
