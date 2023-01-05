import React from 'react'
import { pageLinks } from '../../../utils/constant';
import { Link, useLocation } from 'react-router-dom';

const DesktopLinks = () => {
    const location = useLocation();
  return (
    <ul className="nav-bar-links desktop-links flex-container align-center">
    {pageLinks.map((linkDetails, index) => {
        var { link, label } = linkDetails;
        return (
        <li key={index}>
            <Link
            className={
                location?.pathname === "link" ? "link active" : "link"
            }
            to={link}
            >
            {label}
            </Link>
        </li>
        );
    })}
    </ul>
  )
}

export default DesktopLinks
