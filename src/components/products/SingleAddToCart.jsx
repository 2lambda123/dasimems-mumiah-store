import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AmountBtn from '../common/AmountBtn';

function SingleAddToCart({ product }) {
  const { id, stock, size } = product;
  const [amount, setAmount] = useState(1);

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
      <AmountBtn decrease={decrease} increase={increase} amount={amount} />
      <Link className="btn btn-primary my-2" to="/cart">
        Add to cart
      </Link>
    </div>
  );
}

export default SingleAddToCart;
