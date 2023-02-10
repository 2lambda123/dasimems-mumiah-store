import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Navbar, Loader, ScrollToTop, Modal, CustomForm} from './components';
import PrivateRoute from './utils/PrivateRoute';
import useIdle from './utils/useIdleTimer';
import { 
  Home,
  About, 
  Error, 
  SingleProducts, 
  Contact, 
  Product, 
  CartPage,
  Login,
  Register,
  Account,
  AccountDetails,
  Wishlist,
  Orders,
  Password,
  Billing,
  ResetPassword,
  Checkout,
  Blog,
  SingleBlog
} from "./pages"
import { routeName } from './utils/constant';
import { useProductsContext } from './contexts/products_context';

function App(props) {

  const auth = localStorage.getItem('user_token');
  const {customFormActive} = useProductsContext();

  const logout = () => {
    if(!auth){
      return 
    }else { 
      localStorage.clear();
    window.location.pathname = "/";
    }
   
  };  const {isIdle} = useIdle({onIdle: logout, idleTime: 15})

  return (
   <Router>

    
      
      <ToastContainer />
        <Navbar />
    
        <main className="main-body">
          <Routes>
            <Route path={routeName.home} element={<Home />} />
            <Route path={routeName.about} element={<About />} />
            <Route path={routeName.contact} element={<Contact />} />
            <Route path={routeName.products}>
              <Route index  element={<Product />} />
              <Route path=":category"  element={<Product />} />
            </Route>
            <Route path={`${routeName.products}/items/:id`} element={<SingleProducts />} />
            <Route path={routeName.cart}element={<CartPage />} />
            <Route path={routeName.blog} >
              <Route index element={<Blog />} />
              <Route path=":category" element={<Blog />} />
              <Route path=":category/:id" element={<SingleBlog />} />
            </Route>
            {/* <Route path={routeName.checkout}element={<Checkout />} /> */}
            <Route path={routeName.login} element={<Login />} />
            <Route path={routeName.forgotPassword} element={<ResetPassword />} />
            <Route path={routeName.signUp} element={<Register />} />

            <Route path='/checkout'  
              element={
                <PrivateRoute auth={auth}>
                  <Checkout />
                </PrivateRoute>
              }
            />

            <Route path={routeName.account} element={
              <PrivateRoute auth={auth}><Account />
              </PrivateRoute>
            }>
              <Route index element={<AccountDetails />} />
              <Route path={`${routeName.account}/saved`} element={<Wishlist />} />
              <Route path={`${routeName.account}/orders`} element={<Orders />} />
              <Route path={`${routeName.account}/password`} element={<Password />} />
              <Route path={`${routeName.account}/billing`} element={<Billing />} />
            </Route>
            
            <Route path='*' element={<Error />}  />
          </Routes>

          <ScrollToTop />
        </main>
        <Footer />

        <Modal className="custom-form-modal flex-container align-center justify-center" modalOpened={customFormActive}>

            <CustomForm />

        </Modal>

   </Router>
  );
}

export default App;