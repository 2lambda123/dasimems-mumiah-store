import React from "react";
import { formatPrice } from "../../utils/helpers";

function CartItem({ id, image, name, sizes, price, amount }) {
  return (
    <tr>
      <td class="product__cart__item">
        <div class="product__cart__item__pic">
          <img className="img-fluid" src={image} alt={name} />
        </div>
        <div class="product__cart__item__text">
          <h6>{name}</h6>
          <h5>{formatPrice(price)}</h5>
          <h5>SIZE: {sizes}</h5>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
