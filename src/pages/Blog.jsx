import React, { useEffect, useState } from 'react'
import { BlogBanner, BlogCategories, BlogContentList } from '../components'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'
import { blog } from '../utils/constant'

const Blog = () => {

    const [activePage, setActivePage] = useState("all")
    const [blogContent, setBlogContent] = useState([])
    
    const params = useParams();
    const {category} = params;

    useEffect(()=>{

        if(category){

            setActivePage(category)
        }else{
            setActivePage("all")

        }

    }, [category])

    useEffect(()=>{

        if(category){
            setBlogContent(blog.filter(blo => blo.category.toLowerCase() === category.toLowerCase()))
        }else{
            setBlogContent(blog)
        }

    }, [category])

  return (
    <div justify="center" className='blog'>

        <Row justify="center" className="blog-banner-parent">

            <Col span={21}>

                <BlogBanner />


            </Col>

        </Row>

        <Row justify="center">

            <Col span={21}>

                <BlogCategories active={activePage} />


            </Col>
            
        </Row>


        <Row justify="center">

            <Col span={21}>

                <BlogContentList blogs={blogContent} />

            </Col>
        </Row>

      
    </div>
  )
}

export default Blog
