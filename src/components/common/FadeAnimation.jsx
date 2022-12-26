import React, { useRef, useEffect } from 'react'

const FadeAnimation = ({children}) => {
  const animationContainer = useRef("");

  useEffect(() => {

    var animationChildren = [...animationContainer.current.children];
    var presentCount = 0;

    animationContainer.current.style.position = "relative";

    animationChildren.forEach((element, index) => {

      element.style.position = "absolute";
      element.style.width = "100%";
      // element.style.transition = "0.5s ease all";

      if(index !== 0){
        element.style.opacity = "0";

        if (element.classList.contains("active-animation")){

          element.classList.remove("active-animation")

        }

      }else{
        element.classList.add("active-animation")
      }
      
    });

    setInterval(()=>{

      var count = (presentCount + 1)

      animationChildren.forEach((element, index)=>{

        element.style.opacity = "0";
        element.style.transition = "none";
        element.style.zIndex = "0";
        

        if (element.classList.contains("active-animation")) {

          element.classList.remove("active-animation")
          

        }
        
      })

      animationChildren[count].style.transition = "0.5s ease all";
      animationChildren[count].classList.add("active-animation")
      animationChildren[count].style.zIndex = "9";
      animationChildren[count].style.opacity = "1";

      if(count < (animationChildren.length - 1)){

        presentCount = count;

      }else{
        presentCount = -1;
      }


    }, 5000)


  
  }, [children, animationContainer])
  return (
    <div ref={animationContainer} className="anim-container">

        {children}
      
    </div>
  )
}

export default FadeAnimation
