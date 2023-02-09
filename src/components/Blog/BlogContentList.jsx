import React from 'react'
import { blog } from '../../utils/constant'
import BlogCard from './BlogCard';

const BlogContentList = ({blogs}) => {

    if(!blogs){
        blogs = blog;
    }

  return (
    <div className="blog-content flex-container column">

        {blogs.map((blogContent, index)=>(<BlogCard {...blogContent} key={index} />))}
      
    </div>
  )
}

export default BlogContentList
