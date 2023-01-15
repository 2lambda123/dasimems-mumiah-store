import React from "react";
import { accountHeaderLinks } from "../../utils/constant";
import { Link, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const location = useLocation();
  return (
    <ul className="account-header-nav flex-container">
      {accountHeaderLinks.map((linkDetails, index) => {
        var { link, label } = linkDetails;
        return (
          <li key={index}>
            <Link
              className={`links ${
                location.pathname === link ? "active" : null
              }`}
              to={link}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNav;
