import React, { useCallback, useEffect, useState } from "react";
import { useFilterContext } from "../../contexts/filter_context";
import ProductListing from "../common/ProductListing";
import ProductListingTwo from "../common/ProductListingTwo";
import Pagination from "../common/Pagination";

function ProductList({min}) {
  const { filtered_products: products } = useFilterContext();
  const [activePage, setActivePage] = useState(1)
  const [maxContent] = useState(12)
  const [productContent, setProductContent] = useState([])

const setPageNum = useCallback((page) => {

  // console.log(page)

  setActivePage(page)
  window.scrollTo({
    top: 0,
    left: 0
  })

}, [])

useEffect(()=>{

  var start = ((activePage - 1) * maxContent);
  var end = (activePage * maxContent)

  setProductContent(products.slice(start, end))

}, [activePage, products, maxContent])

  if (products.length < 1) {
    return <h5>Sorry, no product matched your search</h5>;
  }
  return (

    <>
        
      {min? <ProductListingTwo data={productContent} /> :<ProductListing data={productContent} />}

      
      <Pagination activePage={activePage} onChange={setPageNum} maxContent={maxContent} totalNumOfContent={products.length} />
    
    </>

  );
}

export default ProductList;
