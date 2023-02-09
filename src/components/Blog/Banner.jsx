import React from 'react'

const Banner = ({title, subtitle}) => {
  return (
    <div className="blog-banner flex-container align-center justify-center column">

        <h1>{title? title : "Our Blog"}</h1>
        <p>{subtitle? subtitle : "Learn more about Mumiah with our blog."}</p>

        {/* <form className='subscribe-form flex-container align-center space-between'>

            <FormInputField
                placeholder="example@example.com"
                name="email"
                type="text"
                className="subscribe-input"
            />

            <SubmitBtn type="submit" className="submit-subscribe" text="Subscribe" />
        </form> */}


      
    </div>
  )
}

export default Banner
