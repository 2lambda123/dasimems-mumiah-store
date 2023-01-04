import React from "react";
import { formatPrice } from "../../utils/helpers";
import CartAmountBtn from "./CartAmountBtn";
import { useCartContext } from "../../contexts/cart_context";

function CartItem({ id, image, name, sizes, price, amount }) {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <tr>
      <td class="product__cart__item">
        <div class="product__cart__item__pic">
          <img src={image} alt={name} />
        </div>
        <div class="product__cart__item__text">
          <h6>{name}</h6>
          <h5>{formatPrice(price)}</h5>
          <h6>SIZE: {sizes}</h6>
        </div>
      </td>
      <CartAmountBtn amount={amount} increase={increase} decrease={decrease} />
    </tr>
  );
}

export default CartItem;
