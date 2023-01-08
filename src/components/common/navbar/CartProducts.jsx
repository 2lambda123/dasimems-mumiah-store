import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../contexts/cart_context";
import { formatPrice } from "../../../utils/helpers";
import { Player } from "@lottiefiles/react-lottie-player";
import EmptyCart from "../../../assets/lotties/empty_cart.json"

const CartProducts = () => {
  const { cart, removeItem, total_amount } = useCartContext();

  return (
    <div className="pop-up cart-pop-up">
      <div className="cart-pop-up-top">

        {cart.length < 1?(
          <div className="empty-cart-container flex-container column align-center justify-center">

            <Player
              src={EmptyCart}
              className="empty-cart-anim"
              loop
              autoplay
            />
            <p>You have no carted product at the present moment</p>

          </div>
        ):(

          <>
          
            <h2>Shopping Cart</h2>
            {cart.map((product) => {
              var { id, image, name, sizes, price, amount } = product;
              return (
                <div className="cart-item flex-container" key={id}>
                  <div className="cart-item-image">
                    <img className="img-fluid" src={image}  alt={name}/>
                  </div>

                  <div className="cart-item-details flex-container space-between column">
                    <div className="details-content flex-container space-between align-start">
                      <div>
                        <h3>{name}</h3>
                        <div className="quality flex-container">
                          <span className="divider">SIZE:</span>
                          <span>{sizes}</span>
                        </div>
                      </div>

                      <div className="price">{formatPrice(price)}</div>
                    </div>

                    <div className="details-content flex-container space-between align-start">
                      <p className="quantity">Qty {amount}</p>
                      <Button onClick={() => removeItem(id)} className="remove-btn">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              );
          })}
          
          </>
        )}
      </div>
      <div className="cart-pop-up-bottom">
        <div className="cart-bottom-header flex-container align-start space-between">
          <div className="">
            <h3>Subtotal</h3>
            <p>Shipping fee and taxes calculated at checkout</p>
          </div>

          <h2>{formatPrice(total_amount)}</h2>
        </div>

        <div className="cart-bottom-action flex-container space-between align-center">
          <Link
            to="/cart"
            className="button cart-bottom-action-button cart-btn"
          >
            View Cart
          </Link>

          <Link to="" className="button cart-bottom-action-button checkout-btn">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
