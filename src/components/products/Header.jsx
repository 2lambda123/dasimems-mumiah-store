import { Col, Row } from 'antd'
import React from 'react'
import Sort from './Sort'
import { useFilterContext } from '../../contexts/filter_context';
import ProductFilterButton from './ProductFilterButton';

const Header = () => {

    const { filtered_products: products} = useFilterContext();
  return (
    <>

        <Row justify="center" className="product-header">


            <Col span={22} className="product-header-container">

                <Row justify="space-between" className='product-header-content align-center'>

                    <p className='product-header-stats'>Products ({products.length})</p>

                    <div className="product-header-actions flex-container align-center">

                        <ProductFilterButton />

                        <Sort />
                    </div>

                    
                </Row>      

            </Col>


        </Row>
    
    
    </>
  )
}

export default Header
