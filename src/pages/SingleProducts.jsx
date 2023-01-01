import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../contexts/products_context'
import { Link } from 'react-router-dom'
import { productUrl as url } from '../utils/constant'
import {
  Loading,
  Error,
  ProductDetails,
  ProductListing,
  ProductContent,
} from '../components'
import { Row, Col, Breadcrumb } from 'antd'
import { useState } from 'react'

function SingleProducts(props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product,
    fetchSingleProduct,
    products,
  } = useProductsContext()
  const [similarProduct, setSimilarProduct] = useState([])

  const { product } = single_product

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`)
  }, [id])

  useEffect(() => {
    var simProdBrand = products.filter(
      (prod) => prod?.brand === product?.brand && prod?.id !== product?.id,
    )
    var simProdCat = products.filter(
      (prod) =>
        prod?.category?.name === product?.category?.name &&
        prod?.id !== product?.id,
    )
    var allProd = [...simProdBrand, ...simProdCat]

    setSimilarProduct(allProd)
  }, [products, product])

  // Redirect to home after 3sec when err
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

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

      <ProductContent details={product} />

      <ProductDetails details={product?.description} />

      {similarProduct.length > 0 && (
        <Row justify="center" className="related-products">
          <Col span={22} className="related-product-container">
            <h2>Related Products</h2>

            <ProductListing data={similarProduct.slice(0, 8)} />
          </Col>
        </Row>
      )}
    </div>
  )
}

export default SingleProducts
