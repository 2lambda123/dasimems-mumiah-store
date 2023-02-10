import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";

import reducer from "../reducers/product_reducer";
import { productUrl as url, baseUrl, blogUrl } from "../utils/constant";

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
  USER_DETAILS,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
  BLOG_LOADED,
  BLOG_ERROR,
  BLOG_CATEGORY_LOADED,
  BLOG_CATEGORY_ERROR,
  CUSTOM_FORM_CLOSE,
  CUSTOM_FORM_OPEN,
} from "../_actions";

const initialState = {
  isSidebarOpen: false,
  customFormActive: false,
  products_loading: true,
  products_error: false,
  products: [],
  category: [],
  cat_loading: true,
  cat_error: false,
  single_product_loading: true,
  single_product_error: false,
  single_product: {},
  user_details: null,
  user_details_loading: true,
  user_details_error: false,
  blog_loading: true,
  blog_error: false,
  blog_contents: [],
  blog_category_loading: true,
  blog_category_error: false,
  blog_category_contents: []
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openCustomForm = () => {
    dispatch({ type: CUSTOM_FORM_OPEN });
  };

  const closeCustomForm = () => {
    dispatch({ type: CUSTOM_FORM_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data.products;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchCategories = async (url) => {
    dispatch({ type: GET_CAT_BEGIN });
    try {
      const response = await axios.get(`${url}/categories`);
      const category = response.data;
      dispatch({ type: GET_CAT_SUCCESS, payload: category });
    } catch (error) {
      dispatch({ type: GET_CAT_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const fetchBlogs = async (blogUrl) => {
    try {
      const response = await axios.get(blogUrl);
      const data = response.data;
      dispatch({ type: BLOG_LOADED, payload: data.posts });
    } catch (error) {
      dispatch({ type: BLOG_ERROR });
    }
  };

  const fetchBlogsCategories = async (blogUrl) => {
    try {
      const response = await axios.get(`${blogUrl}/categories`);
      const data = response.data;
      
      dispatch({ type: BLOG_CATEGORY_LOADED, payload: data });
    } catch (error) {
      dispatch({ type: BLOG_CATEGORY_ERROR });
    }
  };

  const fetchUserDetails = async (baseUrl) => {
    dispatch({ type: USER_DETAILS });
    try {
      const response = await axios.get(`${baseUrl}/account`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      });
      const user_details = response.data;
      dispatch({ type: USER_DETAILS_SUCCESS, payload: user_details });
    } catch (error) {
      dispatch({ type: USER_DETAILS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
    fetchCategories(url);
    fetchUserDetails(baseUrl);
    fetchBlogs(blogUrl);
    fetchBlogsCategories(blogUrl)
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        fetchUserDetails,
        openCustomForm,
        closeCustomForm
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
