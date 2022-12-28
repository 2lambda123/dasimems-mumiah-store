import React from 'react';
import { useFilterContext } from '../../contexts/filter_context';
import ProductCard from './ProductCard';

function ProductList(props) {
  const { filtered_products: products } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no product matched your search</h5>;
  }
  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
}

export default ProductList;
