import axios from "axios";
import React, { useContext, useReducer, useEffect } from 'react'

import reducer from "../reducers/product_reducer"
import { productUrl as url } from "../utils/constant";

import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS
} from "../_actions"

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchProducts = async (url) => {
        dispatch({type: GET_PRODUCTS_BEGIN})
        try {
          const response = await axios.get(url)
          const products = response.data.products
          console.log(products)
          dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
        } catch (error) {
          dispatch({type: GET_PRODUCTS_ERROR})
        } 
    }


    useEffect(() => {
        fetchProducts(url)
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