import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function AmountBtn({ increase, decrease, amount }) {
  return (
    <div className="quantity-box flex-container align-center">
      <button onClick={decrease}> <FaMinus /> </button>
      <p className="quantity-input">{amount}</p>
      <button onClick={increase}> <FaPlus /></button>
    </div>
  );
}

export default AmountBtn;
