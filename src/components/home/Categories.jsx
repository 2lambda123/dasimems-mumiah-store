import React from 'react'
import { categories } from '../../utils/constant'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import SliderAnimation from '../common/SliderAnimation'
import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Categories = () => {
  var [slideRef, setSliderRef] = useState('')

  const nextSlide = () => {
    slideRef.slickNext()
    console.log('next')
  }

  const prevSlide = () => {
    slideRef.slickPrev()
  }

  return (
    <Row justify="center" className="categories">
      <Col span={22} className="categories-container">
        <h2 className="categories-title">
          Discover more.{' '}
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
            var { image, colorScheme, smallText, bigText, link } = cat

            return (
              <div key={index} className="">
                <div
                  className="category-card flex-container align-center space-between"
                  style={{ background: colorScheme }}
                >
                  <div className="category-card-details">
                    <p className="category-card-details-subtitle">
                      {smallText}
                    </p>

                    <h1 className="category-card-details-title">{bigText}</h1>

                    <Link className="category-card-details-link" to={link}>
                      Show me all
                    </Link>
                  </div>

                  <div className="category-card-image">
                    <img src={image} alt={smallText} />
                  </div>
                </div>
              </div>
            )
          })}
        </SliderAnimation>
      </Col>
    </Row>
  )
}

export default Categories
