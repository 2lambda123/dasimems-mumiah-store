import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

function ProductCard({ image, name, price, id, className }) {
  return (
    <div key={id} className="col-sm-12 col-md-6 col-lg-3 d-flex">
      <div className="product">
        <Link to={`/products/${id}`} className="img-prod">
          <img className="img-fluid" src={image} alt={name} />
        </Link>
        
        <div className="text py-3 pb-4 px-3">
          <h3>
            <a href="#">{name}</a>
          </h3>
          <div className="pricing">
            <p className="price">
              <span>{formatPrice(price)}</span>
            </p>
          </div>
          <p className="bottom-area d-flex px-3">
            <a href="#" className="add-to-cart text-center py-2 mr-1">
              <span>
                Add to cart <AiOutlinePlus className="ml-1" />
              </span>
            </a>
            <a href="#" className="buy-now text-center py-2">
              Buy now
              <span>
                <FaShoppingCart className="ml-1" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
