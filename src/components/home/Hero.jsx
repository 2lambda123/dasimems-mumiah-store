import React from 'react'
import { FiSearch } from 'react-icons/fi';
import FadeAnimation from '../common/FadeAnimation';
import { heroContent, routeName } from '../../utils/constant';
import {useNavigate} from "react-router-dom"
import {Row, Col, Button} from "antd"

const Hero = () => {
    const navigate = useNavigate();
  return (
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
  )
}

export default Hero
