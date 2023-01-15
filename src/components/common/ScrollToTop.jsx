import React, { useEffect, useRef } from 'react'
import { FaAngleUp } from 'react-icons/fa'

const ScrollToTop = () => {

    const scrollRefBtn = useRef("")

    useEffect(()=>{

        window.addEventListener("scroll", ()=>{

            if(window.scrollY >= 150){

                if(scrollRefBtn.current.classList.contains("display-none")){

                    scrollRefBtn.current.classList.remove("display-none")
                }
            }else{
                scrollRefBtn.current.classList.add("display-none")

            }

        })

    }, [])

  return (
    <button ref={scrollRefBtn} className='scroll-top-btn display-none'>
        <FaAngleUp />
    </button>
  )
}

export default ScrollToTop
