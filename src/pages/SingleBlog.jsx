import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { BlogContentList, Error, Loading } from '../components'
import { useProductsContext } from '../contexts/products_context';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { GetData } from '../utils/helpers';

const SingleBlog = () => {
    
    const {
        blog_loading: blogLoading,
        blog_error: blogError,
        blog_contents: blogs,
        blog_category_loading: blogCategoryLoading,
        blog_category_error: blogCategoryError
    } = useProductsContext();
    const [postErr, setPostErr] = useState(false)
    const [postLoading, setPostLoading] = useState(true)
    const [blogDetails, setBlogDetails] = useState(null)
    const [relatedPost, setRelatedPost] = useState([])

    const params = useParams();
    const {id} = params;

    useEffect(()=>{

        if(blogDetails && blogDetails.tags){

            const filteredObjects = blogs.filter(object => {

                return object.tags.some(tag => blogDetails.tags.includes(tag));

            });

            setRelatedPost(filteredObjects);
        }




    }, [blogs, blogDetails])

    
    
    useEffect(()=>{

        GetData(`/posts/${id}`).then((res)=>{

            setBlogDetails(res?.data);

        }).catch((err)=>{

            console.log("unable to fetch post")

            setPostErr(true)

        }).finally(()=>{

            setPostLoading(false)
        })

    }, [id])

    if(blogLoading || blogCategoryLoading || postLoading){
        return <Loading />

    }

    if(blogError || blogCategoryError || postErr){
        return <Error />
    }


  return (
    <Row justify="center" className="single-blog">

        <Col span={21}>
            <div className="single-blog-banner">
                <h1>{blogDetails && blogDetails.title? blogDetails?.title :"This is the blog title"}</h1>
                <div className='flex-container single-blog-banner-details align-center'>
                    <div className='tag flex-container align-center justify-center'>
                        <p>

                            {blogDetails && blogDetails.category && blogDetails?.category.name? blogDetails?.category?.name: "Category"}

                        </p>
                        
                    </div>

                    <div className="author-details flex-container align-center">
                        <div className='author-image'>

                            <img src={blogDetails?.author_avatar} alt={blogDetails && blogDetails.author_name? blogDetails?.author_name : "author name"} />

                        </div>

                        <p className="author-name">{blogDetails && blogDetails.author_name? blogDetails?.author_name : "Author Name"}</p>
                    </div>
                </div>
            </div>

            <div className="single-blog-image">

                <img src={blogDetails?.image} alt={blogDetails && blogDetails.title? blogDetails?.title : "blog title"} />

            </div>

            <div className='single-blog-details' dangerouslySetInnerHTML={{__html: blogDetails && blogDetails.content? blogDetails.content: ""}}>

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

                <BlogContentList blogs={blogs.map(blog => ({
                    ...blog,
                    category: blog?.category?.name,

                }))} columnList />

            </div>
        </Col>

    </Row>
  )
}

export default SingleBlog
