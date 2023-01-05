import { Breadcrumb, Col, Row } from 'antd'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BreadCrumb = ({data, title}) => {
  return (
    <>
        {Array.isArray(data) && <Row justify="center" className="single-product-breadcrumb">
            <Col span="22">
            <h2 className="breadcrumb-title">{title}</h2>
            <Breadcrumb separator={<span className="separator"><FaAngleRight /></span>}>

                {data.map((items, index) => {
                    var {label, link, type} = items;
                    return(
                    <Breadcrumb.Item key={index}>
                        {type === "link"? <Link to={link}>{label}</Link>: <p className="text-breadcrumb">{label}</p> }
                    </Breadcrumb.Item>

                    )
                })}
            </Breadcrumb>
            </Col>
        </Row>}
    
    </>
  )
}

export default BreadCrumb
