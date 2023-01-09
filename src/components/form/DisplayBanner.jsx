import React from "react";
import { Link } from "react-router-dom";

const DisplayBanner = ({
  link: linkDetails,
  text,
  title,
  backgroundImage,
  ...props
}) => {
   var { linkLabel, link } = linkDetails || {};
  return (
    <div
      {...props}
      className="form-banner flex-container align-center justify-center column"
    >
      {title &&<h1>{title}</h1>}
      {text && <p>{text}</p>}

      {linkDetails && <Link className="form-banner-link" to={link}>
        {linkLabel}
      </Link>}
    </div>
  );
};

export default DisplayBanner;
