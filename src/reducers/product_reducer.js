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
  BLOG_ERROR,
  BLOG_LOADED,
  BLOG_CATEGORY_ERROR,
  BLOG_CATEGORY_LOADED,
  CUSTOM_FORM_CLOSE,
  CUSTOM_FORM_OPEN,
} from "../_actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === CUSTOM_FORM_OPEN) {
    return { ...state, customFormActive: true };
  }
  if (action.type === CUSTOM_FORM_CLOSE) {
    return { ...state, customFormActive: false };
  }

  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products_loading: false,
      products: action.payload,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === BLOG_ERROR) {
    return { ...state, blog_loading: false, blog_error: true };
  }

  if (action.type === BLOG_LOADED) {
    return { ...state, blog_loading: false, blog_contents: action.payload || [] };
  }

  if (action.type === BLOG_CATEGORY_ERROR) {
    return { ...state, blog_category_loading: false, blog_category_error: true };
  }

  if (action.type === BLOG_CATEGORY_LOADED) {
    return { ...state, blog_category_loading: false, blog_category_contents: action.payload || [] };
  }

  if (action.type === GET_CAT_BEGIN) {
    return { ...state, cat_loading: true };
  }
  if (action.type === GET_CAT_SUCCESS) {
    return {
      ...state,
      cat_loading: false,
      category: action.payload,
    };
  }
  if (action.type === GET_CAT_ERROR) {
    return { ...state, cat_loading: false, cat_error: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  if (action.type === USER_DETAILS) {
    return { ...state, products_loading: true };
  }
  if (action.type === USER_DETAILS_SUCCESS) {
    return {
      ...state,
      user_details_loading: false,
      user_details: action.payload,
    };
  }
  if (action.type === USER_DETAILS_ERROR) {
    return { ...state, user_details_loading: false, user_details_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
