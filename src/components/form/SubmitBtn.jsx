import { Button } from 'antd'
import React from 'react'

const SubmitBtn = ({text, loading, className, action, ...props}) => {
    if(!action){

        action = ()=>{
            
        }

    }
  return (
    <Button {...props} loading={loading? loading: false} className={`submit-form-btn ${className}`} onClick={action}>
        {text? text : "Submit"}
    </Button>
  )
}

export default SubmitBtn
