import React from 'react'
import {Row, Col} from "antd"
import { buyingSteps } from '../../utils/constant';

const Steps = () => {
  return (
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
  )
}

export default Steps
