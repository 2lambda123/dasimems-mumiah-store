import React from 'react'
import ProductCard from '../products/ProductCard';
import {Row, Col } from "antd"
import { useProductsContext } from '../../contexts/products_context';

const Products = () => {
    
  const { products } = useProductsContext();
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(products);
  return (
    <Row justify="center" className="products categories">
        <Col span={22} className="categories-container">
          <h2 className="product-title categories-title">Latest Products</h2>
            <div className="container">
                <div className="row">
                {newList.slice(0, 8).map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                })}
                </div>
            </div>
        </Col>
      </Row>
  )
}

export default Products
