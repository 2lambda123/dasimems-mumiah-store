import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { productUrl as url } from "../utils/constant";
import { Loading, Error, SingleAddToCart } from "../components";

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
    <div className="container">
      <h1>Single Products</h1>
      <h3>{product?.name}</h3>
      <p>{formatPrice(product?.price.amount)}</p>
      <h2>{product?.description}</h2>
      <hr />
      {product?.stock > 0 && <SingleAddToCart product={product} />}
    </div>
  );
}

export default SingleProducts;
