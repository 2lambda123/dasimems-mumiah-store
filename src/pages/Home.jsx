import React from "react";
import { Helmet } from "react-helmet";
import { useProductsContext } from "../contexts/products_context";
import { Link } from "react-router-dom";
import { Product } from "../components";
import { Col, Row, Button } from "antd";
import {FiSearch} from "react-icons/fi"
import FadeAnimation from "../components/common/FadeAnimation";

function Home(props) {
  const { products } = useProductsContext();
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(products);

  return (
    <>
      <Helmet>
        <title>Home | Mumiah Stores</title>
      </Helmet>

      <main className="main-body">

        <Row justify="center" className="banner align-center">

          <Col span={22} className="banner-container">
            <FadeAnimation>

              <Row justify="space-between" className="banner-main-content align-center">
                
                <Col span={15} className="banner-content">
                  <p className="banner-subtitle">In this season, find the best 🔥</p>

                  <h1 className="banner-title">Exclusive collection for everyone</h1>

                  <Button className="banner-call-to-action">

                    <span className="text">

                      Explore Now

                    </span>

                    <span className="icon">
                      <FiSearch />
                    </span>
                    
                  </Button>
                </Col>

              </Row>
              
            </FadeAnimation>


          </Col>

        </Row>


        <div>
        
          <div>
            <h1>Hello Home</h1>
            {newList.slice(0, 8).map((product) => {
              return <Product key={product.id} {...product} />;
            })}

          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
