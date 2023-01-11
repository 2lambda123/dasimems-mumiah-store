import { Col } from 'antd'
import React from 'react'
import OrderProductDetails from '../account/order/OrderProductDetails'
import { cartProducts } from '../../utils/constant'

const Summary = () => {
  return (

    <>
        <Col span={9} order={2} lg={{span: 9, order: 2}} xs={{span: 24, order: 1}}  className="order-summary">

            {cartProducts.map((product, index) => (<OrderProductDetails type="cart"  product={product} key={index} />))}

            

        </Col>
    
    </>
  )
}

export default Summary
