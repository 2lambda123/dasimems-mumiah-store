import React from "react";
import OrderProductDetails from "./OrderProductDetails";

const Order = ({ order, ...props }) => {
  return (
    <div {...props} className="order-card">
      <div className="order-card-header flex-container space-between align-center">
        <div className="order-details">
          <h3 className="order-id">#{order?.orderId}</h3>

          <div className="order-details-content flex-container align-center">
            <p className="order-date">{order?.date}</p>
            <p className={`order-status ${order?.status?.toLowerCase()}`}>
              {order?.status}
            </p>
          </div>
        </div>

        <div className="order-action">
          {/* <SubmitBtn className="" text="View Order" /> */}
        </div>
      </div>

      <div className="order-card-content">
        {order?.products?.map((product, index) => {
          return <OrderProductDetails product={product} />;
        })}
      </div>
    </div>
  );
};

export default Order;
