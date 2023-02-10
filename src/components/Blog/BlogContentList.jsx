import React from 'react'
import { blog } from '../../utils/constant'
import BlogCard from './BlogCard';
import { Col, Row } from 'antd';

const BlogContentList = ({blogs, columnList}) => {

    if(!blogs){
        blogs = blog;
    }

  return (
    <div className="blog-content flex-container column">


        {columnList? (

            <Row justify="space-between">

                {blogs.map((blogContent, index)=>(

                    <Col span={5} lg={{span: 5}} md={{span: 5}} sm={{span: 11}} xs={{span: 24}} key={index}>

                        <BlogCard columnList={columnList} {...blogContent}/>

                    </Col>
    
                
                ))}

            </Row>


        ) : (

            blogs.map((blogContent, index)=>(

                <BlogCard columnList={columnList} {...blogContent} key={index} />
            
            ))
        )}

      
    </div>
  )
}

export default BlogContentList
