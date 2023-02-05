import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

import AmountBtn from "../common/AmountBtn";
import { useCartContext } from "../../contexts/cart_context";
import { Button } from "antd";

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
    <>
      <div className="product-size">
        <p className="title">Sizes: </p>
        <div className="size-button-content">
          {sizes.map((size, index) => {
            return (
              <button
                className={`${
                  sizeMain === size ? " active-btn size-btn" : "size-btn"
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

      <AmountBtn decrease={decrease} increase={increase} amount={amount} />

      <Link
        className="button add-to-cart-button"
        to="/cart"
        onClick={() => addToCart(id, sizeMain, amount, product)}
      >
        Add to cart
      </Link>

      {/* <Button className="add-to-favorite">
        <BsHeart />
      </Button> */}
    </>
  );
}

export default SingleAddToCart;
