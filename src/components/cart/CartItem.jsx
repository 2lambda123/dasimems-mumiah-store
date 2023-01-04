import React from "react";
import { formatPrice } from "../../utils/helpers";
import CartAmountBtn from "./CartAmountBtn";
import { useCartContext } from "../../contexts/cart_context";
import { FaTrash } from "react-icons/fa";

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
      <td className="product__cart__item">
        <div className="product__cart__item__pic">
          <img src={image} alt={name} />
        </div>
        <div className="product__cart__item__text">
          <h6>{name}</h6>
          <h5>{formatPrice(price)}</h5>
          <h6>SIZE: {sizes}</h6>
        </div>
      </td>
      <CartAmountBtn amount={amount} increase={increase} decrease={decrease} />
      <td className="cart__price">{formatPrice(price * amount)}</td>
      <td className="cart__close">
        <FaTrash
          className="text-danger clear-icon"
          onClick={() => removeItem(id)}
        />
      </td>
    </tr>
  );
}

export default CartItem;
