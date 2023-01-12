import React from "react";
import { formatPrice } from "../../../utils/helpers";
import { Button } from "antd";
import { useCartContext } from "../../../contexts/cart_context";
import SubmitBtn from "../../form/SubmitBtn";
import { FaMinus, FaPlus } from "react-icons/fa";

const OrderProductDetails = ({ product, type, ...props }) => {
  const { removeItem } = useCartContext();
  return (
    <div {...props} className="cart-item flex-container" key={product?.id}>
      <div className="cart-item-image">
        <img className="img-fluid" src={product?.image} alt={product?.name} />
      </div>

      <div className="cart-item-details flex-container space-between column">
        <div className="details-content flex-container space-between align-start">
          <div>
            <h3>{product?.name}</h3>
            <div className="quality flex-container">
              <span className="divider">SIZE:</span>
              <span>{product?.sizes}</span>
            </div>
          </div>

          <div className="price">{formatPrice(product?.price)}</div>
        </div>

        <div className="details-content flex-container space-between align-start">
          <p className="quantity">Quantity: {product?.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductDetails;
