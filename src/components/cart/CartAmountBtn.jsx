import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function CartAmountBtn({ increase, decrease, amount }) {
  return (
    <td className="quantity__item">
      <div className="quantity">
        <button type="button" className="amount-btn" onClick={decrease}>
          <FaMinus />
        </button>
        <h3 className="amount">{amount}</h3>
        <button type="button" className="amount-btn" onClick={increase}>
          <FaPlus />
        </button>
      </div>
    </td>
  );
}

export default CartAmountBtn;
