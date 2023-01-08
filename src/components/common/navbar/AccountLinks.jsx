import React from 'react'
import { accountLinks } from '../../../utils/constant';
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';

const AccountLinks = () => {
  return (
    <div className="pop-up account-pop-up">
      <div className="account-pop-up-header flex-container align-center justify-start">
        <div className="account-image"></div>

        <div className="account-details">
          <h2>Eden Smith</h2>
          <p>Los Angeles, CA</p>
        </div>
      </div>

      <ul className="account-pop-up-link">
        {accountLinks.slice(0, 3).map((linkDetails, index) => {
          var { label, icon, link } = linkDetails;
          return (
            <li key={index}>
              <Link to={link}>
                <span className="icon">{icon}</span>

                <span className="text">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="account-pop-up-link">
        {/* <li className="flex-container space-between align-center">

        <a href="#dark">

          <span className="icon">

            <RiLightbulbFlashLine />

          </span>

          <span className="text">

            Dark Theme

          </span>

        </a>

        <span className="slide-button">
          <span className="slide-button-inner"></span>
        </span>

      </li> */}

        {accountLinks.slice(3).map((linkDetails, index) => {
          var { label, icon, link } = linkDetails;
          return (
            <li key={index}>
              <Link to={link}>
                <span className="icon">{icon}</span>

                <span className="text">{label}</span>
              </Link>
            </li>
          );
        })}

        <li>
          <a href="#logout">
            <span className="icon">
              <RiLogoutCircleLine />
            </span>

            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AccountLinks
