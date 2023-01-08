import React from 'react'
import {Row, Col} from "antd"
import { AccountHeaderNav } from '../components'
import { Outlet } from 'react-router-dom'

const Account = () => {
  return (
    <>

      <Row justify="center" className="account">
        <Col span={21} className="account-container">

          <h1 className="title">Account</h1>

          <p className='subtitle flex-container align-center justify-start'>
            <span className='bold'>Enrico Cole,</span>
            <span className='light'>ciseco@gmail.com</span>
            <span className='dot'>.</span>
            <span className='light'>Los Angeles, CA</span>
          </p>

          <AccountHeaderNav />

          <div className='account-contents'>

            <Outlet />

          </div>

        </Col>
      </Row>
    
    </>
  )
}

export default Account
