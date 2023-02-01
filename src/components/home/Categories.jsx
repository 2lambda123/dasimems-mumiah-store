import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import SliderAnimation from "../common/SliderAnimation";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useProductsContext } from "../../contexts/products_context";
import { categoryColors, routeName } from "../../utils/constant";

const Categories = () => {
  var [slideRef, setSliderRef] = useState("");
  const {category: categories} = useProductsContext();

  const nextSlide = () => {
    slideRef.slickNext();
  };

  const prevSlide = () => {
    slideRef.slickPrev();
  };

  return (
    <Row justify="center" className="categories">
      <Col span={21} className="categories-container">
        <h2 className="categories-title">
          Discover more.{" "}
          <span className="light"> Good things are waiting for you</span>
        </h2>

        <div className="slide-btn-container flex-container align-center">
          <Button className="slide-btn" onClick={prevSlide}>
            <FaAngleLeft />
          </Button>

          <Button className="slide-btn" onClick={nextSlide}>
            <FaAngleRight />
          </Button>
        </div>

        <SliderAnimation
          setSliderRef={setSliderRef}
          className="categories-content"
        >
          {categories.map((cat, index) => {
            var { name, latest } = cat;
            var {image} = latest;
            var arrNum = (index % categoryColors.length)
            var colorScheme = categoryColors[arrNum]

            return (
              <div key={index} className="">
                <div
                  className="category-card flex-container align-center space-between"
                  style={{ background: colorScheme }}
                >
                  <div className="category-card-details">
                    {/* <p className="category-card-details-subtitle">
                      {smallText}
                    </p> */}

                    <h1 className="category-card-details-title">{name}</h1>

                    <Link className="category-card-details-link" to={`${routeName.products}/${name}`}>
                      Show me all
                    </Link>
                  </div>

                  <div className="category-card-image">
                    <img src={image} alt={name} />
                  </div>
                </div>
              </div>
            );
          })}
        </SliderAnimation>
      </Col>
    </Row>
  );
};

export default Categories;
