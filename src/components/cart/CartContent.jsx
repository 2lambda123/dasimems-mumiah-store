import React from "react";
import { Link } from "react-router-dom";
import CartColumn from "./CartColumn";
import { useCartContext } from "../../contexts/cart_context";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

function CartContent(props) {
  const { cart, clearCart } = useCartContext();

  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="shopping__cart__table">
            <table>
              <CartColumn />
              <tbody>
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
              </tbody>
            </table>
          </div>

          <div className="cart-actions flex-container space-between wrap align-center">

            <Link className="continue-shopping-btn button" to="/products">Continue Shopping</Link>

            <button className="clear-cart-btn" type="button" onClick={clearCart}>
              Clear Cart
            </button>

          </div>

          
        </div>
        <CartTotals />
      </div>
    </>
  );
}

export default CartContent;
