import React from "react";
import { Helmet } from "react-helmet";
import { useProductsContext } from "../contexts/products_context";
import { Link, useNavigate } from "react-router-dom";
import { ProductCard } from "../components";
import { Col, Row, Button } from "antd";
import { FiSearch } from "react-icons/fi";
import FadeAnimation from "../components/common/FadeAnimation";
import { heroContent, routeName } from "../utils/constant";
import BannerImage from "../assets/images/hero-right-3.png"

function Home(props) {
  const { products } = useProductsContext();
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(products);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Home | Mumiah Stores</title>
      </Helmet>

        <Row justify="center" className="banner align-center">
          <Col span={22} className="banner-container">

          <div className="ellipse ellipse-one"></div>
          <div className="ellipse ellipse-two"></div>
          <div className="ellipse ellipse-three"></div>
          <div className="ellipse ellipse-four"></div>
            <FadeAnimation>

              {heroContent.map((content, index)=>{
                var {image, subtitle, title}  = content;
                return(

                  <Row
                    key={index}
                    justify="space-between"
                    className="banner-main-content align-center"
                  >

                    <img src={image} alt="mumia banner" className="banner-image" />

                    <Col span={15} className="banner-content">
                      <p className="banner-subtitle">
                        {subtitle} 🔥
                      </p>

                      <h1 className="banner-title">
                        {title}
                      </h1>

                      <Button className="banner-call-to-action" onClick={()=>{
                        navigate(routeName.products)
                      }}>
                        <span className="text">Explore Now</span>

                        <span className="icon">
                          <FiSearch />
                        </span>
                      </Button>
                    </Col>

                  </Row>
                  
                )
              })}
            </FadeAnimation>
          </Col>
        </Row>

        <div>
          <div>
            <h1>Hello Home</h1>
            {newList.slice(0, 8).map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
    </>
  );
}

export default Home;
