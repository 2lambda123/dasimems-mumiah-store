import { Col, Row } from 'antd'
import React from 'react'
import { BreadCrumb, CheckoutSummary, PaymentDetails } from '../components'
import { routeName } from '../utils/constant'

const Checkout = () => {

    var breadCrumbData = [
        {
            label: "Homepage",
            type: "link",
            link: routeName.home
        },

        {
            label: "Cart",
            type: "link",
            link: routeName.cart
        },

        {
            label: "checkout",

        }
    ]
  return (

    <>

        <div className="checkout">

            <BreadCrumb title="Checkout" data={breadCrumbData} />

            <Row justify="center" className="checkout-content">

                <Col span={21}>

                    <Row justify="space-between">
                        <PaymentDetails />
                        <CheckoutSummary />

                    </Row>  



                </Col>

            </Row>
        </div>
    
    </>
  )
}

export default Checkout
