import React from "react";
import CartColumn from "./CartColumn";
import { useCartContext } from "../../contexts/cart_context";
import CartItem from "./CartItem";

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
        </div>
      </div>
    </>
  );
}

export default CartContent;
