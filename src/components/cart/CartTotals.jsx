import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { useCartContext } from "../../contexts/cart_context";

function CartTotals(props) {
  const { total_amount, shipping_fee } = useCartContext();
  console.log(total_amount);

  return (
    <div className="col-lg-4">
      <div className="cart__total">
        <h6>Cart total</h6>
        <ul>
          <li>
            Subtotal <span>{formatPrice(total_amount)}</span>
          </li>
          <li>
            Shipping Fee: <span>{formatPrice(shipping_fee)}</span>
          </li>
          <li>
            Total <span>{formatPrice(total_amount + shipping_fee)}</span>
          </li>
        </ul>
        <Link to="/checkout" className="btn-total">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}

export default CartTotals;
