import React from 'react'
import { Link } from 'react-router-dom'

const DisplayBanner = ({link: {linkLabel, link}, text, title, ...props}) => {
  return (
    <div {...props} className="form-banner flex-container align-center justify-center column">

        <h1>{title}</h1>
        <p>{text}</p>

        <Link className="form-banner-link" to={link}>{linkLabel}</Link>
      
    </div>
  )
}

export default DisplayBanner
