import axios from "axios";
import React, { useContext, useReducer, useEffect } from 'react'

import reducer from "../reducers/product_reducer"
import { productUrl as url } from "../utils/constant";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_CAT_BEGIN,
  GET_CAT_SUCCESS,
  GET_CAT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../_actions"

const initialState = {
    isSidebarOpen: false,
    products_loading: true,
    products_error: false,
    products: [],
    category: [],
    cat_loading: true,
    cat_error: false,
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN})
  }
  
  const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }

    const fetchProducts = async (url) => {
        dispatch({type: GET_PRODUCTS_BEGIN})
        try {
          const response = await axios.get(url)
          const products = response.data.products
          dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
        } catch (error) {
          dispatch({type: GET_PRODUCTS_ERROR})
        } 
    }

    const fetchCategories = async (url) => {
        dispatch({type: GET_CAT_BEGIN})
        try {
          const response = await axios.get(`${url}/categories`)
          const category = response.data
          dispatch({type: GET_CAT_SUCCESS, payload: category})
        } catch (error) {
          dispatch({type: GET_CAT_ERROR})
        } 
    }
      
    const fetchSingleProduct = async(url) => {
        dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
        try {
          const response = await axios.get(url);
          const singleProduct = response.data
          dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
        } catch (error) {
          dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }
      }

    useEffect(() => {
        fetchProducts(url)
        fetchCategories(url)
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}