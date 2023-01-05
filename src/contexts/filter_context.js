import React, { useEffect, useContext, useReducer, useCallback } from 'react'
import reducer from "../reducers/filter_reducer"
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
    OPEN_FILTER_OPTION,
    CLOSE_FILTER_OPTION,
} from "../_actions"
import { useProductsContext } from "./products_context"

const initialState = {
    filtered_products: [],
    all_products: [],
    sort: 'price-lowest',
    filterOptionState: true,
    filters:{
      text: '',
      brand: 'all',
      category: 'all',
      sizes: [],
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
    }
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
      dispatch({type: FILTER_PRODUCTS})
      dispatch({ type: SORT_PRODUCTS })
    }, [products, state.sort, state.filters])

    const updateSort = (e) => {
      const value = e.target.value
      dispatch({type: UPDATE_SORT, payload: value})
    }

    const updateFilters = (e) => {
      let name = e.target.name
      let value = e.target.value
      if(name === "category") {
        value = e.target.textContent
      }
      if(name === 'price') {
        value = Number(value)
      }
      if(name === 'sizes') {
        value = e.target.checked
      }
      if(name === 'shipping') {
        value = e.target.checked
      }
      dispatch({type: UPDATE_FILTERS, payload: {name, value}})
    }
  
    const clearFilters = () => {
      dispatch({type: CLEAR_FILTERS})
    }

    const filterOptions = useCallback(() =>{

      if(state.filterOptionState){

        dispatch({type: CLOSE_FILTER_OPTION})
      }else{

        dispatch({type: OPEN_FILTER_OPTION})
      }


    }, [state.filterOptionState])
  
  
    return (
      <FilterContext.Provider  
        value={{
          ...state, 
          updateSort,
          updateFilters,
          clearFilters,
          filterOptions
      }}>
        {children}
      </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}
  