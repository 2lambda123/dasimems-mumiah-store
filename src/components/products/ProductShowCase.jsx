import { Col, Row } from 'antd'
import React, { useRef } from 'react'
import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick'

const ProductShowCase = ({ images }) => {
  var imageSlideRef = useRef('');
  const [state, setState] = useState({
    slideIndex: 0,
    updateCount: 0,
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () =>
      setState((prevState) => ({
        ...prevState,
        updateCount: parseInt(prevState.updateCount) + 1,
      })),
    beforeChange: (current, next) =>
      setState((prevState) => ({ ...prevState, slideIndex: next })),
  }

  return (
    <>

        {!Array.isArray(images) && (
            <div className="flex-container align-center justify-center">

                <p>The Image data sent must be an array of images</p>
                
            </div>
        )}
      {Array.isArray(images) && <Row justify="space-between align-start">
        <Col
          span={5}
          order={1}
          lg={{ span: 5, order: 1 }}
          md={{ span: 24, order: 2 }}
          sm={{ span: 5, order: 1 }}
          xs={{ span: 24, order: 2 }}
          className="flex-container"
        >
          <Row>
            {images.map((image, index) => {
              return (
                <Col
                  span={24}
                  lg={{ span: 24 }}
                  md={{ span: 5 }}
                  sm={{ span: 24 }}
                  xs={{ span: 5 }}
                  className="image-container small-image"
                  key={index}
                  onClick={() => {
                    imageSlideRef.slickGoTo(index)
                  }}
                  align-start
                >
                  <img src={image} alt="" />

                  {index === state.slideIndex && (
                    <div className="overlay"></div>
                  )}
                </Col>
              )
            })}
          </Row>
        </Col>

        <Col
          span={18}
          order={2}
          lg={{ span: 18, order: 2 }}
          md={{ span: 24, order: 1 }}
          sm={{ span: 18, order: 2 }}
          xs={{ span: 24, order: 1 }}
          className="image-container"
        >
          {images.length > 1 && <div className="image-slide-btn flex-container align-center space-between">
            <button
              className="slide-btn prev-btn"
              onClick={() => {
                imageSlideRef.slickPrev()
              }}
            >
              <FaAngleLeft />
            </button>
            <button
              className="slide-btn next-btn"
              onClick={() => {
                imageSlideRef.slickNext()
              }}
            >
              <FaAngleRight />
            </button>
          </div>}

          <Slider ref={(slider) => (imageSlideRef = slider)} {...settings}>
            {images.map((image, index) => {
              return (
                <div key={index} className="">
                  <img src={image} alt="" />
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>}
    </>
  )
}

export default ProductShowCase
