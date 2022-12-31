import React from 'react'
import Slider from 'react-slick'

const SliderAnimation = ({ children, className, setSliderRef, ...props }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1084,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <Slider
        ref={(c) => setSliderRef(c)}
        {...settings}
        className={'slider-animation flex-container ' + className}
      >
        {children}
      </Slider>
    </>
  )
}

export default SliderAnimation
