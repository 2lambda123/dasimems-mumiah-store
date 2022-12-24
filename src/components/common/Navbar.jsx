import React, { useCallback, useEffect, useRef, useState } from "react";
import {Row, Col, Button } from "antd";
import { accountLinks, cartProducts, images, pageLinks } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { /* RiLightbulbFlashLine, */ RiLogoutCircleLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "./Modal";
function Navbar(props) {
  const location = useLocation();
  const [navOpened, setNavOpened] = useState(false)
  const [navPosition, setNavPosition] = useState("-500px")
  const navigate = useNavigate()
  const [searchOpened, setSearchOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef("");
  const [accountPop, setAccountPop] = useState(false)
  const [cartPop, setCartPop] = useState(false)

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

  const search = useCallback(()=>{

    if(searchValue.trim() !== ""){

    }

  }, [searchValue]);

  useEffect(()=>{

    setNavOpened(false)
    
  }, [navigate])

  useEffect(()=>{

    if (searchOpened){
      searchRef.current.focus();
    }

  }, [searchOpened])
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

            {searchOpened && <div className="nav-bar-search flex-container align-center">


              <button onClick={search}><FiSearch /></button>

              <input 
                ref={searchRef}
                type="text"
                className="nav-bar-search-box"
                placeholder="Type and press enter"
                value={searchValue}
                onChange={(e)=>{
                  setSearchValue(e.target.value);
                }}
                onKeyPress={(e)=>{
                  console.log(e)
                  
                }}
                
              />

              <button onClick={()=>{
                setSearchOpened(false)
              }}><MdClose /></button>

            </div>}

            {!searchOpened && <ul className="nav-bar-links desktop-links flex-container align-center">
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
            </ul>}

            <div className="nav-bar-side-links flex-container align-center">
              {!searchOpened && <button className="side-link search-open-btn" onClick={()=>{
                setSearchOpened(true)
              }}>
                <FiSearch />
              </button>}

              <button className="side-link" onClick={()=>{
                setAccountPop(prevState => !prevState)
              }}>
                <BiUser />

                {accountPop && <div className="pop-up account-pop-up">

                  <div className="account-pop-up-header flex-container align-center justify-start">

                    <div className="account-image"></div>

                    <div className="account-details">

                      <h2>Eden Smith</h2>
                      <p>Los Angeles, CA</p>

                    </div>

                  </div>

                  <ul className="account-pop-up-link">
                    {accountLinks.slice(0, 3).map((linkDetails, index) => {
                      
                        var {label, icon, link} = linkDetails;
                      return(

                        <li key={index}>

                          <Link to={link}>

                            <span className="icon">

                              {icon}

                            </span>

                            <span className="text">

                              {label}

                            </span>

                          </Link>
                          
                        </li>

                      )
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

                    {accountLinks.slice(3, ).map((linkDetails, index) => {

                      var { label, icon, link } = linkDetails;
                      return (

                        <li key={index}>

                          <Link to={link}>

                            <span className="icon">

                              {icon}

                            </span>

                            <span className="text">

                              {label}

                            </span>

                          </Link>

                        </li>

                      )
                    })}

                    <li>

                      <a href="#logout">

                        <span className="icon">

                          <RiLogoutCircleLine />

                        </span>

                        <span className="text">

                          Logout

                        </span>

                      </a>

                    </li>

                  </ul>

                </div>}

              </button>

              <button className="side-link desktop-side-link" onClick={()=>{
                setCartPop(prevState => !prevState)
              }}>
                <AiOutlineShoppingCart />

                <span className="cart-stats flex-container align-center justify-center">
                  3
                </span>

                {cartPop && <div className="pop-up cart-pop-up">

                    <div className="cart-pop-up-top">

                      <h2>Shopping Cart</h2>

                      {cartProducts.map((product, index)=>{
                        var {quantity, name, price, size, type} = product;
                        return(

                        <div className="cart-item flex-container" key={index}>

                          <div className="cart-item-image">

                          </div>

                          <div className="cart-item-details flex-container space-between column">

                            <div className="details-content flex-container space-between align-start">

                              <div>

                                  <h3>{name}</h3>

                                <div className="quality flex-container">
                                  <span>{type}</span> 
                                  <span className="divider">|</span>
                                  <span>{size}</span>
                                </div>

                              </div>

                              <div className="price">
                                {price}
                              </div>
                              

                            </div>

                            <div className="details-content flex-container space-between align-start">

                                <p className="quantity">Qty {quantity}</p>
                              <Button className="remove-btn">
                                Remove
                              </Button>

                            </div>

                          </div>

                        </div>

                        )
                      })}


                    </div>
                    <div className="cart-pop-up-bottom">

                      <div className="cart-bottom-header flex-container align-start space-between">
                        <div className="">
                          <h3>Subtotal</h3>
                          <p>Shipping and taxes calculated at checkout</p>
                        </div>

                        <h2>&#8358;299.00</h2>
                      </div>

                      <div className="cart-bottom-action flex-container space-between align-center">
                        <Link to="" className="button cart-bottom-action-button cart-btn">View Cart</Link>

                        <Link to="" className="button cart-bottom-action-button checkout-btn">Checkout</Link>
                      </div>

                    </div>
                    

                </div>}
              </button>

              <button className="side-link mobile-side-link" onClick={() => {
                navigate("/")
              }}>
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
