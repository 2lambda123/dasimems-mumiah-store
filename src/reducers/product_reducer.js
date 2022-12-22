import {
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

const products_reducer = (state, action) => {
    if( action.type === GET_PRODUCTS_BEGIN ) {
        return {...state, products_loading: true}
      }
      if(action.type === GET_PRODUCTS_SUCCESS) {
        return {
          ...state,
          products_loading: false,
          products: action.payload,
        }
      }
      if(action.type === GET_PRODUCTS_ERROR) {
        return { ...state, products_loading: false, products_error: true }
      }
      if( action.type === GET_CAT_BEGIN ) {
        return {...state, cat_loading: true}
      }
      if(action.type === GET_CAT_SUCCESS) {
        return {
          ...state,
          cat_loading: false,
          category: action.payload,
        }
      }
      if(action.type === GET_CAT_ERROR) {
        return { ...state, cat_loading: false, cat_error: true }
      }
  
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer