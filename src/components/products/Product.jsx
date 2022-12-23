import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

function Product({ image, name, price, id }) {
  return (
    <div>
      <Link to={`/products/${id}`} className="container">
        <div className="container">
          <img width={"200px"} src={image} alt={name} />

          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
