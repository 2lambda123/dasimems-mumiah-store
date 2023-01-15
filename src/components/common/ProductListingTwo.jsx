import React from 'react'
import {Row, Col}from "antd";
import ProductCard from '../products/ProductCard';

const ProductListingTwo = ({data}) => {
  return (
    <Row
        justify={"space-between"}
    >

      {data.map((product, index) => {

        return (
            <Col 
                key={index}
                span={7}
                lg={{span: 7}}
                md={{span: 7}}
                xs={{span: 11}}
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

export default ProductListingTwo
