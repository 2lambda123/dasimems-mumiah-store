import React from "react";
import { images } from "../../utils/constant";
import { Row, Col, Button } from "antd";
import { useProductsContext } from "../../contexts/products_context";

const AdvertisementOne = () => {
  const {openCustomForm} = useProductsContext()
  return (
    <Row justify="center" className="advertisement">
      <Col span={21} className="advertisement-container">
        <Row
          justify="space-between"
          className="advertisement-inner-content align-center"
        >
          <Col
            span={11}
            order={1}
            lg={{ span: 11, order: 1 }}
            md={{ span: 11, order: 1 }}
            xs={{ span: 24, order: 2 }}
            className="advertisement-image"
          >
            <img src={images.promoOne} alt="" />
          </Col>

          <Col
            span={11}
            order={2}
            lg={{ span: 11, order: 1 }}
            md={{ span: 11, order: 1 }}
            xs={{ span: 24, order: 1 }}
            className="advertisement-details"
          >
            <img
              src={images.logo}
              alt="mumiah logo"
              className="advertisement-logo"
            />

            <h1 className="advertisement-title">
              Special offer in kids products
            </h1>

            <p className="advertisement-subtitle">
              Fashion is a form of self-expression and autonomy at a particular
              period and place.
            </p>

            <Button onClick={openCustomForm} className="button advertisement-call-to-action">
              Request Custom Product
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AdvertisementOne;
