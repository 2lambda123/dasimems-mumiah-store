import React from 'react'
import {Button, Col, Row} from "antd"
import { images } from '../../utils/constant'
import { FaArrowRight } from 'react-icons/fa'

const AdvertisementTwo = () => {
  return (
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
  )
}

export default AdvertisementTwo
