import React from 'react'
import { ProductListing } from '../../components'
import { useFilterContext } from '../../contexts/filter_context';

const Wishlist = () => {
    
  const { filtered_products: products } = useFilterContext();
  return (
    <div className="wishlist">

        <h1 className="title">List of Saved Products</h1>

        <ProductListing data={products?.slice(0, 12)} />
      
    </div>
  )
}

export default Wishlist
