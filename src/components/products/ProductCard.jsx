import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';

function ProductCard({ image, name, price, id, className }) {
  return (
    <div>
      <Link to={`/products/${id}`} className={" " + className}>
        <div className="">
          <img width={"200px"} src={image} alt={name} />

          <h5>{name}</h5>
          <p>{formatPrice(price.amount)}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
