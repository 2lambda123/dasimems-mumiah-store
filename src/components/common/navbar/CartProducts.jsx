import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import { cartProducts } from '../../../utils/constant';

const CartProducts = () => {
  return (
    <div className="pop-up cart-pop-up">
                    <div className="cart-pop-up-top">
                      <h2>Shopping Cart</h2>

                      {cartProducts.map((product, index) => {
                        var { quantity, name, price, size, type } = product;
                        return (
                          <div className="cart-item flex-container" key={index}>
                            <div className="cart-item-image"></div>

                            <div className="cart-item-details flex-container space-between column">
                              <div className="details-content flex-container space-between align-start">
                                <div>
                                  <h3>{name}</h3>

                                  <div className="quality flex-container">
                                    <span>{type}</span>
                                    <span className="divider">|</span>
                                    <span>{size}</span>
                                  </div>
                                </div>

                                <div className="price">{price}</div>
                              </div>

                              <div className="details-content flex-container space-between align-start">
                                <p className="quantity">Qty {quantity}</p>
                                <Button className="remove-btn">Remove</Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="cart-pop-up-bottom">
                      <div className="cart-bottom-header flex-container align-start space-between">
                        <div className="">
                          <h3>Subtotal</h3>
                          <p>Shipping and taxes calculated at checkout</p>
                        </div>

                        <h2>&#8358;299.00</h2>
                      </div>

                      <div className="cart-bottom-action flex-container space-between align-center">
                        <Link
                          to=""
                          className="button cart-bottom-action-button cart-btn"
                        >
                          View Cart
                        </Link>

                        <Link
                          to=""
                          className="button cart-bottom-action-button checkout-btn"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
  )
}

export default CartProducts
