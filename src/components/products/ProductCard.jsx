import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

function ProductCard({ image, name, price, category: {name: categoryName}, id, sizes, className, ...props }) {
  
  return (
    <div key={id} className="col-sm-12 col-md-12 col-lg-12 d-flex">
      <div className="product">
        <Link to={`/products/items/${id}`} className="img-prod">
          <img className="img-fluid product-image" src={image} alt={name} />
        </Link>

        <div className="product-details py-3 pb-4 px-3">

          <div className="small-images-container">

            <div className="images-content flex-container">

              <div className="small-images flex-container  align-center justify-center"></div>
              <div className="small-images flex-container  align-center justify-center"></div>

            </div>

          </div>

          <h3>
            <a href="#prod">{name.length > 20? `${name.slice(0, 20)}...`: name}</a>
          </h3>
          <p className="product-category">{categoryName}</p>
          <p className="product-size-stat">{sizes.length} available Sizes</p>
          <p className="price">
            <span>{formatPrice(price)}</span>
            {/* <del>400</del> */}
          </p>

          {/* <p className="discount">14% off</p> */}
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
