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

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn">
                <Link to="/products">Continue Shopping</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn update__btn">
                <button type="button" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <CartTotals />
      </div>
    </>
  );
}

export default CartContent;
