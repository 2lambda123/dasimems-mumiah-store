import React from 'react'
import { formatPrice } from '../../../utils/helpers'

const OrderProductDetails = ({product, ...props}) => {
  return (
    <div className="cart-item flex-container" key={product?.id}>
      <div className="cart-item-image">
        <img className="img-fluid" src={product?.image}  alt={product?.name}/>
      </div>

      <div className="cart-item-details flex-container space-between column">
        <div className="details-content flex-container space-between align-start">
          <div>
            <h3>{product?.name}</h3>
            <div className="quality flex-container">
              <span className="divider">SIZE:</span>
              <span>{product?.sizes}</span>
            </div>
          </div>

          <div className="price">{formatPrice(product?.price)}</div>
        </div>

        <div className="details-content flex-container space-between align-start">
          <p className="quantity">Qty {product?.amount}</p>
          {/* <Button onClick={() => removeItem(product?.id)} className="remove-btn">
            Remove
          </Button> */}
        </div>
      </div>
    </div>
  )
}

export default OrderProductDetails
