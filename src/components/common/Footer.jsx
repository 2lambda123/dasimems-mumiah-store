import { Col, Row } from 'antd';
import React from 'react';
import { footerContact, images, pageLinks, socialLinks } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Row justify="center" className="footer">
        <Col span={22}>
          <Row justify="space-between">
            <Col
              span={6}
              lg={{ span: 6 }}
              md={{ span: 7 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className="footer-content wrap social-footer-content">
              <img className="footer-image" alt="mumiah logo" src={images.logoTwo} />

              <p className="py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nesciunt aspernatur
                vero est numquam accusamus consectetur qui laboriosam ad sunt.
              </p>

              <ul className="social-links">
                {socialLinks.map((linkDetails, index) => {
                  var { link, label, icon } = linkDetails;

                  return (
                    <li key={index}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-container align-center">
                        <span className="social-link-image flex-container">{icon}</span>

                        <span className="social-link-text">{label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>

            <Col
              span={6}
              lg={{ span: 6 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 24 }}
              className="footer-content">
              <h2 className="footer-content-title">Quick Access</h2>

              <ul className="footer-links">
                {pageLinks.map((linkDetails, index) => {
                  var { link, label } = linkDetails;
                  return (
                    <li key={index}>
                      <Link to={link}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </Col>

            <Col
              span={6}
              lg={{ span: 6 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 24 }}
              className="footer-content">
              <h2 className="footer-content-title">Have a Question</h2>

              <ul className="footer-links">
                {footerContact.map((contact, index) => {
                  var { text, icon, url } = contact;
                  return (
                    <li key={index}>
                      <a href={url} rel="noreferrer" target="_blank">
                        <span className="icon">{icon}</span>
                        <span className="text">{text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
