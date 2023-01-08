import React from 'react'
import { order } from '../../utils/constant'
import { Order as OrderComponent } from '../../components'

const Orders = () => {
  return (
    <div className="orders">

        <h1 className="title">Order History</h1>

        <div className='order-contents'>

            {order.map((ord, index)=>{
                return(

                    <OrderComponent order={ord} key={index} />
                )
            })}

        </div>
      
    </div>
  )
}

export default Orders
