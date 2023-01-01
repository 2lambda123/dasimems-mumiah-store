import React from "react";
import { useFilterContext } from "../../contexts/filter_context";
import ProductListing from "../common/ProductListing";

function ProductList(props) {
  const { filtered_products: products } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no product matched your search</h5>;
  }
  return (
    <ProductListing data={products} />
  );
}

export default ProductList;
