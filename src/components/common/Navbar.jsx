import React, { useEffect, useState } from "react";
import {Row, Col } from "antd";
import { images, pageLinks } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "./Modal";
function Navbar(props) {
  const location = useLocation();
  const [navOpened, setNavOpened] = useState(false)
  const [navPosition, setNavPosition] = useState("-500px")
  const navigate = useNavigate()

  const changeNavState = () => {
    setNavOpened((prevState) => !prevState);

    if (navOpened) {
      setNavPosition("-500px");
    } else {
      setTimeout(() => {
        setNavPosition("00px");
      }, 40);
    }
  }
  useEffect(()=>{

    setNavOpened(false)
    
  }, [navigate])
  return (
    <>
      <Row className="nav-bar align-center" justify="center">
        <Col span={22}>
          <Row justify="space-between" className="nav-bar-content align-center">
            <button className="mobile-open-btn-link" onClick={changeNavState}>
              <FaBars />
            </button>

            <div className="nav-bar-logo">
              <img src={images.logo} alt="mumiah logo" />
            </div>

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

            <div className="nav-bar-side-links flex-container align-center">
              <button className="side-link">
                <FiSearch />
              </button>

              <button className="side-link">
                <BiUser />
              </button>

              <button className="side-link">
                <AiOutlineShoppingCart />

                <span className="cart-stats flex-container align-center justify-center">
                  3
                </span>
              </button>
            </div>
          </Row>
        </Col>
      </Row>

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
  );
}

export default Navbar;
