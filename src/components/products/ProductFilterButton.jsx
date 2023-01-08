import React from 'react'
import { CiSliderHorizontal } from 'react-icons/ci'
import { useFilterContext } from '../../contexts/filter_context';

const ProductFilterButton = () => {
    const {filterOptions, filterOptionState} = useFilterContext();
  return (
    <>

    <button onClick={filterOptions} className="product-header-button">

        <span className="text desktop">
        
            {filterOptionState? "Hide": "Show"} Filters
        </span>

        <span className="text mobile">
        
            {filterOptionState? "Show": "Hide"} Filters
        </span>

        <span className="icon">

            <CiSliderHorizontal />

        </span>

    </button>
    
    </>
  )
}

export default ProductFilterButton
