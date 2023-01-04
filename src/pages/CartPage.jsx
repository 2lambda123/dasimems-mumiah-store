import React from "react";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";
import { CartContent } from "../components";

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
    <section className="shopping-cart spad">
      <div className="container">
        <CartContent />
      </div>
    </section>
  );
}

export default CartPage;
