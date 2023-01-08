import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { images, routeName } from '../../utils/constant'
import { FiSearch } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai'
import MobileLinks from './navbar/MobileLinks'

import { useCartContext } from '../../contexts/cart_context'
import CartProducts from './navbar/CartProducts'
import AccountLinks from './navbar/AccountLinks'
import DesktopLinks from './navbar/DesktopLinks'
import SearchBar from './navbar/SearchBar'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
  const { total_items } = useCartContext()
  const [navOpened, setNavOpened] = useState(false)
  const [navPosition, setNavPosition] = useState('-500px')
  const navigate = useNavigate()
  const [searchOpened, setSearchOpened] = useState(false)
  const [accountPop, setAccountPop] = useState(false)
  const [cartPop, setCartPop] = useState(false)

  const changeNavState = () => {
    setNavOpened((prevState) => !prevState)

    if (navOpened) {
      setNavPosition('-500px')
    } else {
      setTimeout(() => {
        setNavPosition('0px')
      }, 40)
    }
  }

  useEffect(() => {
    setNavOpened(false)
  }, [navigate])

  // useEffect(() => {
  //   if (searchOpened) {
  //   }
  // }, [searchOpened]);
  return (
    <>
      <Row className="nav-bar align-center" justify="center">
        <Col span={21}>
          <Row justify="space-between" className="nav-bar-content align-center">
            <button className="mobile-open-btn-link" onClick={changeNavState}>
              <FaBars />
            </button>

            <div className="nav-bar-logo">
              <img src={images.logo} alt="mumiah logo" />
            </div>

            {searchOpened && <SearchBar setSearchOpened={setSearchOpened} />}

            {!searchOpened && <DesktopLinks />}

            <div className="nav-bar-side-links flex-container align-center">

              {/* for future referrence in case of search functionality */}
              {/* {!searchOpened && (
                <button
                  className="side-link search-open-btn"
                  onClick={() => {
                    setSearchOpened(true)
                  }}
                >
                  <FiSearch />
                </button>
              )} */}

              <button
                className="side-link"
                onClick={() => {
                  if(!localStorage.getItem("user_token")){
                    navigate(routeName.login);
                    return;
                  }
                  setAccountPop((prevState) => !prevState)
                }}
              >
                {localStorage.getItem("user_token")? <BiUser />: <AiOutlineLogin />}

                {accountPop && <AccountLinks />}
              </button>

              <button
                className="side-link desktop-side-link"
                onClick={() => {
                  setCartPop((prevState) => !prevState)
                }}
              >
                <AiOutlineShoppingCart />

                <span className="cart-stats flex-container align-center justify-center">
                  {total_items}
                </span>

                {cartPop && <CartProducts />}
              </button>

              <button
                className="side-link mobile-side-link"
                onClick={() => {
                  navigate(routeName.cart)
                }}
              >
                <AiOutlineShoppingCart />

                <span className="cart-stats flex-container align-center justify-center">
                  {total_items}
                </span>
              </button>
            </div>
          </Row>
        </Col>
      </Row>

      <MobileLinks
        changeNavState={changeNavState}
        navPosition={navPosition}
        navOpened={navOpened}
      />
    </>
  )
}

export default Navbar
