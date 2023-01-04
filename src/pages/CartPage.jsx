import React from "react";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";

function CartPage(props) {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="container py-5">
        <h2 className="py-5">Your cart is empty</h2>
        <Link to="/products" className="btn">
          Start Shopping Now
        </Link>
      </div>
    );
  }
  return (
    <div className="container py-5">
      <h1 className="py-5">Cart content</h1>
    </div>
  );
}

export default CartPage;
