import React from 'react'
import { BlogBanner, BlogContentList } from '../components'
import { Col, Row } from 'antd'

const Blog = () => {
  return (
    <Row justify="center" className='blog'>

        <Col span={21}>

            <BlogBanner />

            <BlogContentList />
        </Col>

      
    </Row>
  )
}

export default Blog
