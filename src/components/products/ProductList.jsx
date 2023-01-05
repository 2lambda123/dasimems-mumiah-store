import React from "react";
import { useFilterContext } from "../../contexts/filter_context";
import ProductListing from "../common/ProductListing";
import ProductListingTwo from "../common/ProductListingTwo";

function ProductList({min}) {
  const { filtered_products: products } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no product matched your search</h5>;
  }
  return (

    <>
        
      {min? <ProductListingTwo data={products} /> :<ProductListing data={products} />}
    
    </>

  );
}

export default ProductList;
