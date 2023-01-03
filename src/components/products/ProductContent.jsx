import { Col, Row } from "antd";
import React from "react";
import { formatPrice } from "../../utils/helpers";
import SingleAddToCart from "./SingleAddToCart";
import ProductShowCase from "./ProductShowCase";
import { productImages } from "../../utils/constant";

const ProductContent = ({ details }) => {
  const product = details;
  return (
    <Row justify="center" className="product-content">
      <Col span={22} className="">
        <Row justify="space-between">
          <Col
            span={11}
            lg={{ span: 11 }}
            md={{ span: 11 }}
            xs={{ span: 24 }}
            className="single-product-image flex-content align-start justify-center"
          >
            {/* <img src={product?.image} alt={product?.name} /> */}

            <ProductShowCase images={productImages} />
          </Col>

          <Col
            span={11}
            lg={{ span: 11 }}
            md={{ span: 11 }}
            xs={{ span: 24 }}
            className="single-product-details"
          >
            <h1 className="single-product-title text-uppercase text-2xl">
              {product?.name}
            </h1>
            <p className="single-product-subtitle">
              Brand: <span className="text-uppercase">{product?.brand}</span>
            </p>

            <div className="price flex-container py-3 align-end">
              <p className="original-price">{formatPrice(product?.price)}</p>
              {/* <del className="discounted-price">$75.0</del> */}
            </div>

            <p className="single-product-description">
              {product?.description.length <= 180
                ? product?.description
                : `${product?.description.substring(0, 180)}..`}{" "}
            </p>

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
                    );
                  })}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductContent;
