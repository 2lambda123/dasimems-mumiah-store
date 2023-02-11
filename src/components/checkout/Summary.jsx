import { Col } from "antd";
import React from "react";
import { useCartContext } from "../../contexts/cart_context";
import OrderProductDetails from "../account/order/OrderProductDetails";
import { formatPrice } from "../../utils/helpers";

const Summary = () => {
  const { cart, total_amount, shipping_fee } = useCartContext();

  return (
    <>
      <Col
        span={9}
        order={2}
        lg={{ span: 9, order: 2 }}
        xs={{ span: 24, order: 1 }}
        className="order-summary"
      >
        <h2 className="order-summary-title">Your Items</h2>
        {cart.map((product, index) => (
          <OrderProductDetails type="cart" product={product} key={index} />
        ))}

        <div className="cart-stat">
          <p className="stat-details">
            <span className="title">Subtotal: </span>
            <span className="value">{formatPrice(total_amount)}</span>
          </p>

          <p className="stat-details">
            <span className="title">Shipping: </span>
            <span className="value">{formatPrice(shipping_fee)}</span>
          </p>

          <p className="stat-details">
            <span className="title">Total: </span>
            <span className="value">{formatPrice(parseInt(shipping_fee) + parseInt(total_amount))}</span>
          </p>
        </div>
      </Col>
    </>
  );
};

export default Summary;
