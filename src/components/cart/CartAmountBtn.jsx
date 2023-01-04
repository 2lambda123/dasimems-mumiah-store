import React from "react";
import { useCartContext } from "../../contexts/cart_context";
import { formatPrice } from "../../utils/helpers";

function CartAmountBtn(props) {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    // toggleAmount(id, "inc");
  };
  const decrease = () => {
    // toggleAmount(id, "dec");
  };
  return (
    <div>
      <h1>Cart Amount</h1>
    </div>
  );
}

export default CartAmountBtn;
