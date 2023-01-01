import { Col, Row } from 'antd'
import React from 'react'
import { formatPrice } from '../../utils/helpers'
import SingleAddToCart from './SingleAddToCart'

const ProductContent = ({ details }) => {
  const product = details
  return (
    <Row justify="center" className="product-content">
      <Col span={22} className="">
        <Row justify="space-between">
          <Col
            span={11}
            lg={{ span: 11 }}
            md={{ span: 11 }}
            xs={{ span: 24 }}
            className="single-product-image flex-content align-center justify-center"
          >
            <img src={product?.image} alt={product?.name} />
          </Col>

          <Col
            span={11}
            lg={{ span: 11 }}
            md={{ span: 11 }}
            xs={{ span: 24 }}
            className="single-product-details"
          >
            <h1 className="single-product-title">{product?.name}</h1>
            <p className="single-product-subtitle">Brand : {product?.brand}</p>

            <p className="reviews">(139 reviews)</p>

            <div className="price flex-container align-end">
              <p className="original-price">{formatPrice(product?.price)}</p>
              <del className="discounted-price">$75.0</del>
            </div>

            <p className="single-product-description">{product?.description}</p>

            <div className="single-product-actions  flex-container">
              <div className="quantity-container flex-container wrap space-between">
                {product?.stock > 0 && <SingleAddToCart product={product} />}
              </div>
            </div>

            <div className="extra-details-container">
              <div className="extra-details flex-container">
                <p className="title">Availability:</p>
                <p className="Value">{product?.stock} In stock</p>
              </div>

              <div className="extra-details flex-container">
                <p className="title">Available sizes:</p>
                <p className="value">
                  {product?.sizes.map((size, index) => {
                    return (
                      <span className="inner-value" key={index}>
                        {size}
                      </span>
                    )
                  })}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProductContent
