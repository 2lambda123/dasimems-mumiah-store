import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import AmountBtn from "../common/AmountBtn";
import { useCartContext } from "../../contexts/cart_context";

function SingleAddToCart({ product }) {
  const { addToCart } = useCartContext();
  const { id, stock, sizes } = product;

  const [amount, setAmount] = useState(1);
  const [sizeMain, setSizeMain] = useState(sizes[0]);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div>
      <div className="container">
        <span>Sizes: </span>
        <div>
          {sizes.map((size, index) => {
            return (
              <button
                className={`${
                  sizeMain === size
                    ? " btn btn-primary px-3 my-2 mx-2"
                    : "px-3 my-2 mx-2"
                }`}
                key={index}
                onClick={() => setSizeMain(size)}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
      <div></div>
      <AmountBtn decrease={decrease} increase={increase} amount={amount} />
      <Link
        className="btn btn-primary my-2"
        to="/cart"
        onClick={() => addToCart(id, sizeMain, amount, product)}
      >
        Add to cart
      </Link>
    </div>
  );
}

export default SingleAddToCart;
