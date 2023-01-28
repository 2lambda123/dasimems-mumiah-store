import React from "react";
import { Filter, ProductHeader, ProductList } from "../components";
import { Col, Row } from "antd";
import { useFilterContext } from "../contexts/filter_context";

function Product(props) {
  const { filterOptionState } = useFilterContext();
  return (
    <div>
      <ProductHeader />

      <Row justify="center" className="product-list">
        <Col span={21} className="product-list-container">
          <Row justify="space-between" className="product-list-content">
            <div
              className={
                filterOptionState
                  ? "product-filter-container transitioned"
                  : "product-filter-container transitioned nonactive-filter-container"
              }
            >
              <Filter />
            </div>

            <div
              className={
                filterOptionState
                  ? "main-product-list transitioned"
                  : "main-product-list transitioned nonactive-product-list"
              }
            >
              <ProductList min />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
