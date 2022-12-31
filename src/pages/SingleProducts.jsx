import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { productUrl as url } from "../utils/constant";
import { Loading, Error, SingleAddToCart } from "../components";
import { Row, Col, Button, Breadcrumb } from "antd";

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
