import React from 'react'
import {Row, Col}from "antd";
import ProductCard from '../products/ProductCard';

const ProductListing = ({data}) => {
  return (
    <Row
        justify={"space-between"}
    >

      {data.map((product, index) => {

        return (
            <Col 
                key={index}
                span={5}
                lg={{span: 5}}
                md={{span: 5}}
                sm={{span: 11}}
                xs={{span: 24}}
            >
                <ProductCard 
                    key={product.id}
                    {...product} 
                />

            </Col>
            
        )
      })}
    </Row>
  )
}

export default ProductListing
