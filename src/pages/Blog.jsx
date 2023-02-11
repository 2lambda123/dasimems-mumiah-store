import React, { useCallback, useEffect, useState } from 'react'
import { BlogBanner, BlogCategories, BlogContentList, Error, Loading, Pagination } from '../components'
import { Col, Row } from 'antd'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../contexts/products_context'

const Blog = () => {

    const [activePage, setActivePage] = useState("all")
    const [blogContent, setBlogContent] = useState([])
    const {
        blog_loading: blogLoading,
        blog_error: blogError,
        blog_contents: blogs,
        blog_category_loading: blogCategoryLoading,
        blog_category_error: blogCategoryError,
        blog_category_contents: categories
    } = useProductsContext();
    
  const [activePageNum, setActivePageNum] = useState(1)
  const [maxContent] = useState(12)
  const [blogToShow, setBlogToShow] = useState([])

  
    const params = useParams();
    const {category} = params;

    const setPageNum = useCallback((page) => {


    setActivePageNum(page)
    window.scrollTo({
        top: 0,
        left: 0
    })

    }, [])

    

    useEffect(()=>{

        if(category){

            setActivePage(category)
        }else{
            setActivePage("all")

        }

    }, [category])

    useEffect(()=>{

        if(category){
            setBlogContent(blogs.filter(blo => blo?.category?.name.toLowerCase() === category.toLowerCase()))
        }else{
            setBlogContent(blogs)
        }

    }, [category, blogs])

    
    useEffect(()=>{

    var start = ((activePageNum - 1) * maxContent);
    var end = (activePageNum * maxContent)

    setBlogToShow(blogContent.slice(start, end))

    }, [activePageNum, blogContent, maxContent])



    if(blogLoading || blogCategoryLoading){
        return <Loading />

    }

    if(blogError || blogCategoryError){
        return <Error />
    }

  return (
    <div justify="center" className='blog'>

        <Row justify="center" className="blog-banner-parent">

            <Col span={21}>

                <BlogBanner />


            </Col>

        </Row>

        <Row justify="center">

            <Col span={21}>

                <BlogCategories categories={categories.map(cat => ({
                    ...cat,
                    label: cat?.name
                }))} active={activePage} />


            </Col>
            
        </Row>


        <Row justify="center">

            <Col span={21}>

                <BlogContentList blogs={blogToShow.map(blog => ({
                    ...blog,
                    category: blog?.category?.name,

                }))} />

                
                <Pagination activePage={activePage} onChange={setPageNum} maxContent={maxContent} totalNumOfContent={blogContent.length} />

            </Col>
        </Row>

      
    </div>
  )
}

export default Blog
