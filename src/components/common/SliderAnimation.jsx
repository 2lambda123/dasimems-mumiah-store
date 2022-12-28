import React from 'react'

const SliderAnimation = ({children, className, ...props}) => {
  return (

    <>
      <div {...props} className={"slider-animation flex-container " + className}>
            
            {children}
        
        </div>
    
    </>
  )
}

export default SliderAnimation
