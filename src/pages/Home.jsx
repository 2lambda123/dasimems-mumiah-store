import React from 'react';
import { Helmet } from 'react-helmet';
import { useProductsContext } from '../contexts/products_context';
import { Link, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components';
import { Col, Row, Button } from 'antd';
import { FiSearch } from 'react-icons/fi';
import FadeAnimation from '../components/common/FadeAnimation';
import SliderAnimation from '../components/common/SliderAnimation';
import { heroContent, routeName, buyingSteps, images, categories } from '../utils/constant';
import { FaArrowRight } from 'react-icons/fa';

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
            {heroContent.map((content, index) => {
              var { image, subtitle, title } = content;
              return (
                <Row
                  key={index}
                  justify="space-between"
                  className="banner-main-content align-center">
                  <img src={image} alt="mumia banner" className="banner-image" />

                  <Col span={15} className="banner-content">
                    <p className="banner-subtitle">{subtitle} 🔥</p>

                    <h1 className="banner-title">{title}</h1>

                    <Button
                      className="banner-call-to-action"
                      onClick={() => {
                        navigate(routeName.products);
                      }}>
                      <span className="text">Explore Now</span>

                      <span className="icon">
                        <FiSearch />
                      </span>
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </FadeAnimation>
        </Col>
      </Row>

      <Row justify="center" className="categories">
        <Col span={22} className="categories-container">
          <h2 className="categories-title">
            Discover more. <span className="light"> Good things are waiting for you</span>
          </h2>

          <SliderAnimation className="categories-content">
            {categories.map((cat, index) => {
              var { image, colorScheme, smallText, bigText, link } = cat;

              return (
                <div
                  key={index}
                  className="flex-container category-card align-center slide-card space-between"
                  style={{ background: colorScheme }}>
                  <div className="category-card-details">
                    <p className="category-card-details-subtitle">{smallText}</p>

                    <h1 className="category-card-details-title">{bigText}</h1>

                    <Link className="category-card-details-link" to={link}>
                      Show me all
                    </Link>
                  </div>

                  <div className="category-card-image">
                    <img src={image} alt={smallText} />
                  </div>
                </div>
              );
            })}
          </SliderAnimation>
        </Col>
      </Row>

      <Row justify="center" className="buying-steps">
        <Col span={22} className="buying-steps-content">
          <Row justify="space-between" className="buying-steps-inner-content">
            {buyingSteps.map((step, index) => {
              var { image, title, subtitle, textColor, colorScheme } = step;
              var sn = index + 1;
              return (
                <Col
                  key={index}
                  span={5}
                  lg={{ span: 5 }}
                  md={{ span: 5 }}
                  sm={{ span: 11 }}
                  xs={{ span: 24 }}
                  className="step-card flex-container column align-center justify-start">
                  <img className="step-image" alt="" src={image} />
                  <span
                    style={{ background: colorScheme, color: textColor }}
                    className="step-card-tag">{`Step ${sn}`}</span>
                  <h3 className="step-card-title">{title}</h3>
                  <p className="step-card-subtitle">{subtitle}</p>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Row justify="center" className="advertisement">
        <Col span={22} className="advertisement-container">
          <Row justify="space-between" className="advertisement-inner-content align-center">
            <Col
              span={11}
              order={1}
              lg={{ span: 11, order: 1 }}
              md={{ span: 11, order: 1 }}
              xs={{ span: 24, order: 2 }}
              className="advertisement-image">
              <img src={images.promoOne} alt="" />
            </Col>

            <Col
              span={11}
              order={2}
              lg={{ span: 11, order: 1 }}
              md={{ span: 11, order: 1 }}
              xs={{ span: 24, order: 1 }}
              className="advertisement-details">
              <img src={images.logo} alt="mumiah logo" className="advertisement-logo" />

              <h1 className="advertisement-title">Special offer in kids products</h1>

              <p className="advertisement-subtitle">
                Fashion is a form of self-expression and autonomy at a particular period and place.
              </p>

              <Link to="" className="button advertisement-call-to-action">
                Discover More
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center" className="products categories">
        <Col span={22} className="categories-container">
          <h2 className="product-title categories-title">Latest Products</h2>

          <SliderAnimation className="categories-content">
            <div className="container">
              <div className="row">
                {newList.slice(0, 8).map((product) => {
                  return <ProductCard key={product.id} {...product} />;
                })}
              </div>
            </div>
          </SliderAnimation>
        </Col>
      </Row>

      <Row justify="center" className="advertisement advertisement-two">
        <Col span={22} className="advertisement-container">
          <Row justify="space-between" className="advertisement-inner-content align-center">
            <Col
              span={11}
              order={2}
              lg={{ span: 11, order: 2 }}
              md={{ span: 11, order: 2 }}
              xs={{ span: 24, order: 2 }}
              className="advertisement-image">
              <img src={images.promoTwo} alt="" />
            </Col>

            <Col
              span={11}
              order={1}
              lg={{ span: 11, order: 1 }}
              md={{ span: 11, order: 1 }}
              xs={{ span: 24, order: 1 }}
              className="advertisement-details">
              <h1 className="advertisement-title">Don't miss out on special offers</h1>

              <p className="advertisement-subtitle">
                Register to receive news about the latest, savings combos, discount codes...
              </p>

              <ul className="advertisement-list">
                <li>
                  {' '}
                  <span className="count align-center justify-center first-count">01</span> Savings
                  Combos
                </li>
                <li>
                  {' '}
                  <span className="count align-center justify-center second-count">02</span>{' '}
                  Freeship
                </li>
                <li>
                  {' '}
                  <span className="count align-center justify-center third-count">03</span> Premium
                  Magazine
                </li>
              </ul>

              <div className="advertisement-input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="advertisement-input-box"
                />
                <Button className="advertisement-input-btn flex-container align-center justify-center">
                  <span className="icon">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
