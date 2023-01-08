import React from 'react'
import { SubmitBtn } from '../../components'

const Billing = () => {
  return (
    <div className='billing'>
        <h3 className="title">Payments & payouts</h3>

        <p className='description'>When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.</p>
        
        <p className='description'>To get paid, you need to set up a payout method releases payouts about 24 hours after a guest's scheduled time. The time it takes for the funds to appear in your account depends on your payout method</p>

        <SubmitBtn text="Add payout method" className="action-btn"/>
      
    </div>
  )
}

export default Billing
