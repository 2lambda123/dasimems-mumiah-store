import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from "../_actions"

const filter_reducer = (state, action) => {
    if(action.type === LOAD_PRODUCTS) {
      return {
        ...state, 
        all_products:[...action.payload], 
        filtered_products:[...action.payload]
      }
    }

    if(action.type === UPDATE_SORT) {
      return {...state, sort: action.payload}
    }
    if(action.type === SORT_PRODUCTS) {
      const {sort, filtered_products} = state;
      let tempProducts = [...filtered_products];
      if(sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price.amount < b.price.amount) {
            return -1
          }
          if (a.price.amount > b.price.amount) {
            return 1
          }
          return 0
        })
      }
      if(sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price.amount - a.price.amount)
      }
      if(sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if(sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return {...state, filtered_products: tempProducts}
    }

    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default filter_reducer
  