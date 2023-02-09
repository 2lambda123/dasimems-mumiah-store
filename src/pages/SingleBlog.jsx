import { Col, Row } from 'antd'
import React from 'react'
import { BlogContentList } from '../components'

const SingleBlog = () => {
  return (
    <Row justify="center" className="single-blog">

        <Col span={21}>
            <div className="single-blog-banner">
                <h1>This is the blog title</h1>
                <div className='flex-container single-blog-banner-details align-center'>
                    <div className='tag flex-container align-center justify-center'>
                        <p>

                            Food

                        </p>
                        
                    </div>

                    <div className="author-details flex-container align-center">
                        <div className='author-image'>

                        </div>

                        <p className="author-name">Author Name</p>
                    </div>
                </div>
            </div>

            <div className="single-blog-image">

                <img src={""} alt="blog title" />

            </div>

            <div className='single-blog-details'>

            </div>

            <div className="related-tags">
                <h3>Related Tags</h3>

                <div className='tag-contents flex-container align-center'>

                    <div className='tag flex-container align-center justify-center'>
                        <p>

                            Food

                        </p>
                        
                    </div>

                </div>
            </div>

            <div className="related-blog">

                <h3>Related Blogs</h3>

                <BlogContentList columnList />

            </div>
        </Col>

    </Row>
  )
}

export default SingleBlog
