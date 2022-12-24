import React, { useEffect, useContext, useReducer } from 'react'
import reducer from "../reducers/filter_reducer"
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from "../_actions"
import { useProductsContext } from "./products_context"

const initialState = {
    filtered_products: [],
    all_products: [],
    sort: 'price-lowest'
}
  
const FilterContext = React.createContext()
  
    export const FilterProvider = ({ children }) => {
    const {products} = useProductsContext()
    const[state, dispatch] = useReducer(reducer, initialState)

  
    // useEffect to dispatch products to LOADPRODUCTS
    useEffect(() => {
      dispatch({type: LOAD_PRODUCTS, payload: products})
    }, [products])

    useEffect(() => {
      dispatch({ type: SORT_PRODUCTS })
    }, [products, state.sort])

    const updateSort = (e) => {
      const value = e.target.value
      dispatch({type: UPDATE_SORT, payload: value})
    }
  
    return (
      <FilterContext.Provider value={{...state, updateSort}}>
        {children}
      </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}
  