import React from 'react'
import { blogCategoriesArr, routeName } from '../../utils/constant'
import { Link } from 'react-router-dom';

const BlogCategories = ({categories, active}) => {
    
    if(!categories){
        categories = blogCategoriesArr;
    }

    if(!active){
        active = "all"
    }

  return (
    <ul className='blog-categories flex-container align-center list-style-none'>

        <li>

            <Link className={`${active.toLowerCase() === "all"? "active" : ""}`} to={`${routeName.blog}`} >
                All
            </Link>

        </li>


        {categories.map((cat, index) => (<li>
            <Link key={index} className={`${active.toLowerCase() === cat.label.toLowerCase()? "active" : ""}`} to={`${routeName.blog}/${cat.label}`} >
                {cat.label}
            </Link>
        </li>))}
      
    </ul>
  )
}

export default BlogCategories
