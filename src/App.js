import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Navbar, Loader} from './components';
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
  Checkout
} from "./pages"
import { useProductsContext } from './contexts/products_context';
import { routeName } from './utils/constant';

function App(props) {

  const auth = localStorage.getItem('user_token');

  const logout = () => {
    if(!auth){
      return 
    }else { 
      localStorage.clear();
    window.location.pathname = "/";
    }
   
  };  const {isIdle} = useIdle({onIdle: logout, idleTime: 15})

  const {products_loading, cat_loading} = useProductsContext();
  return (
   <Router>

    {products_loading || cat_loading? (
      
      <Loader />

    ): (
      <>
      <ToastContainer />
        <Navbar />
    
        <main className="main-body">
          <Routes>
            <Route path={routeName.home} element={<Home />} />
            <Route path={routeName.about} element={<About />} />
            <Route path={routeName.contact} element={<Contact />} />
            <Route path={routeName.products} element={<Product />} />
            <Route path={`${routeName.products}/:id`} element={<SingleProducts />} />
            <Route path={routeName.cart}element={<CartPage />} />
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
        </main>
        <Footer />
      </>
    )}

   </Router>
  );
}

export default App;