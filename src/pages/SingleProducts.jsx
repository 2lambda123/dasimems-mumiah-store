import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../contexts/products_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { productUrl as url } from '../utils/constant';
import { Loading, Error, SingleAddToCart } from '../components';
import {Row, Col, Button, Breadcrumb} from "antd"
import { FaHeart } from 'react-icons/fa';

function SingleProducts(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
  }, [id]);

  // Redirect to home after 3sec when err
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { product } = single_product;

  return (
    <div className="single-product-items">
      <Row justify="center" className="single-product-breadcrumb">
        <Col span="22">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="">Home</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <Link to="">Products</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <p>{product?.name}</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row justify="center" className="product-content">
        <Col span={22} className="">

          <Row justify="space-between">

            <Col span={11} className="single-product-image">


            </Col>

            <Col span={11} className="single-product-details">

              <h1 className="single-product-title">{product?.name}</h1>
              <p className="single-product-subtitle">Brand : SKMEImore</p>

              <p className="reviews">(139 reviews)</p>

              <div className="price flex-container align-end">
                <p className="original-price">{formatPrice(product?.price.amount)}</p>
                <p className="discounted-price">$75.0</p>
              </div>

              <p classNmae="single-product-description">{product?.description}</p>

              <div className="single-product-actions  flex-container">

                <div className="quantity-container flex-container">

                  <p>Quantity</p>

                  {product?.stock > 0 && <SingleAddToCart product={product} />}

                </div>

                <Button className="add-to-favorite">
                  <FaHeart />
                </Button>

                <div className="extra-details">
                  <p className="title">Availability</p>
                  <p className="Value">24 In stock</p>
                </div>

                <div className="extra-details">
                  <p className="title">Available sizes</p>
                  <p className="Value">
                    <span className="inner-value">XL</span>
                    <span className="inner-value">S</span>
                    <span className="inner-value">M</span>
                    <span className="inner-value">L</span>
                  </p>
                </div>


              </div>

              
            </Col>
            
          </Row>

        </Col>
      </Row>

      <Row justify="center" className="product-content">
        <Col span={22} className="">

          <Row justify="space-between">

            <Col span={11} className="single-product-image">


            </Col>

            <Col span={11} className="single-product-details">

              <h1 className="single-product-title">{product?.name}</h1>
              <p className="single-product-subtitle">Brand : SKMEImore</p>

              <p className="reviews">(139 reviews)</p>

              <div className="price flex-container align-end">
                <p className="original-price">{formatPrice(product?.price.amount)}</p>
                <p className="discounted-price">$75.0</p>
              </div>

              <p classNmae="single-product-description">{product?.description}</p>

              <div className="single-product-actions  flex-container">

                <div className="quantity-container flex-container">

                  <p>Quantity</p>

                  {product?.stock > 0 && <SingleAddToCart product={product} />}

                </div>

                <Button className="add-to-favorite">
                  <FaHeart />
                </Button>

                <div className="extra-details">
                  <p className="title">Availability</p>
                  <p className="Value">24 In stock</p>
                </div>

                <div className="extra-details">
                  <p className="title">Available sizes</p>
                  <p className="Value">
                    <span className="inner-value">XL</span>
                    <span className="inner-value">S</span>
                    <span className="inner-value">M</span>
                    <span className="inner-value">L</span>
                  </p>
                </div>


              </div>

              
            </Col>
            
          </Row>

        </Col>
      </Row>

      <div className="container">
        <h1>Single Products</h1>
        <h3>{product?.name}</h3>
        <p>{formatPrice(product?.price)}</p>
        <h2>{product?.description}</h2>
        <hr />
        {product?.stock > 0 && <SingleAddToCart product={product} />}
      </div>
    </div>
  );
}

export default SingleProducts;
