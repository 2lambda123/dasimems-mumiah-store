import Modal from "../Modal"
import React from 'react'
import { images, pageLinks } from '../../../utils/constant';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MobileLinks = ({changeNavState, navPosition, navOpened}) => {

  return (
    <>
    
         <Modal modalOpened={navOpened}>
            <div className="mobile-nav" style={{ left: navPosition }}>
            <div className="mobile-nav-header flex-container align-start space-between">
                <img src={images.logo} alt="mumiah logo" />

                <button className="close-mobile-nav-btn" onClick={changeNavState}>
                <MdClose />
                </button>
            </div>

            <p className="mobile-nav-description">
                Discover the most outstanding wears at Mumiah fashion
            </p>

            <div className="mode-change"></div>

            <ul className="mobile-nav-links">
                {pageLinks.map((linkDetails, index) => {
                var { label, link } = linkDetails;
                return (
                    <li key={index}>
                    <Link onClick={changeNavState} to={link}>
                        {label}
                    </Link>
                    </li>
                );
                })}
            </ul>
            </div>
      </Modal>

    </>
  )
}

export default MobileLinks
