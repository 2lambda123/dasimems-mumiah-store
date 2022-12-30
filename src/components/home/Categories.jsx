import React from 'react'
import { categories } from '../../utils/constant';
import SliderAnimation from '../common/SliderAnimation';
import {Row, Col} from "antd"
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
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
  )
}

export default Categories
