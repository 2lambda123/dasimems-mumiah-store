import React from "react";
import { Row, Col, Divider } from "antd";

const ProductDetails = ({ details }) => {
  return (
    <Row justify="center" className="full-details">
      <Col span={21} className="full-details-content">
        <Divider className="details-divider">Description</Divider>

        <p className="details-header">Description</p>

        <p className="details-text">{details}</p>
      </Col>
    </Row>
  );
};

export default ProductDetails;
