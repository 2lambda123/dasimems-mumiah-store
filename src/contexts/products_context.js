import axios from "axios";
import React, { useContext, useReducer, useEffect } from 'react'

import reducer from "../reducers/product_reducer"
import { productUrl as url } from "../utils/constant";

import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    GET_CAT_BEGIN,
    GET_CAT_SUCCESS,
    GET_CAT_ERROR,
} from "../_actions"

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    category: [],
    cat_loading: false,
    cat_error: false,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
  


    useEffect(() => {
        fetchProducts(url)
        fetchCategories(url)
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}