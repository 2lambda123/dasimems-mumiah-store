import {
    ADD_TO_CART,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
  } from '../_actions'
  
  const cart_reducer = (state, action) => {

    if(action.type === ADD_TO_CART) {
      const {id, sizes, amount, product} = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + sizes)

      if(tempItem) {
        const tempCart = state.cart.map((cartItem) =>{
          if(cartItem.id === id + sizes){
            let newAmount = cartItem.amount + amount;
            if(newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount}
          }
          else{
            return cartItem
          }
        })
  
        return{...state, cart: tempCart}
      } 
      else {
        const newItem = {
          id: id + sizes,
          name: product.name,
          sizes,
          amount,
          image: product.image,
          price: product.price,
          max: product.stock
        }
        return {...state, cart: [...state.cart, newItem]}
      }
    }
  

    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default cart_reducer
  