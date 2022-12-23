import { Col, Row } from 'antd'
import React from 'react'
import { images, socialLinks } from '../../utils/constant'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>

    <Row justify="center" className="footer">

        <Col span={22}>

            <Row justify="space-between">

                <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 24}} xs={{span: 24}} className="footer-content social-footer-content">

                    <img className="footer-image" alt="mumiah logo" src={images.logo} />

                    <ul className="social-links">

                        {socialLinks.map((linkDetails, index) => {

                            var {link, label, icon} = linkDetails;

                            return(
                                
                                <li key={index}><a href={link} target="_blank" rel="noreferrer" className="flex-container align-center">

                                    <span className="social-link-image flex-container">
                                        <img src={icon} alt={`${label} icon`} />
                                        
                                    </span>


                                    <span className="social-link-text">

                                        {label}

                                    </span>

                                </a></li>
                            )

                        })}

                        
                    </ul>
                </Col>

                <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 11}} xs={{span: 24}} className="footer-content">

                    <h2 className="footer-content-title">Getting started</h2>

                    <ul className="footer-links">
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                    </ul>
                    
                </Col>


                <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 11}} xs={{span: 24}} className="footer-content">

                    <h2 className="footer-content-title">Getting started</h2>

                    <ul className="footer-links">
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                        <li><Link to="">Link Name</Link></li>
                    </ul>

                </Col>

            </Row>

        </Col>

    </Row>
    
    </>
  )
}

export default Footer
