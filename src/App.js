import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Footer, Navbar, Loader} from './components';
import { 
  Home,
  About, 
  Error, 
  SingleProducts, 
  Contact, 
  Product, 
  CartPage, 
  Login,
  SignUp
} from "./pages"
import { useProductsContext } from './contexts/products_context';
import { routeName } from './utils/constant';

function App(props) {

  const {products_loading, cat_loading} = useProductsContext();
  return (
   <Router>

    {products_loading || cat_loading? (
      
      <Loader />

    ): (
      <>
      
        <Navbar />
    
        <main className="main-body">
          <Routes>
            <Route path={routeName.home} element={<Home />} />
            <Route path={routeName.about} element={<About />} />
            <Route path={routeName.login} element={<Login />} />
            <Route path={routeName.signUp} element={<SignUp />} />
            <Route path={routeName.contact} element={<Contact />} />
            <Route path={routeName.products} element={<Product />} />
            <Route path={`${routeName.products}/:id`} element={<SingleProducts />} />
            <Route path='/cart' element={<CartPage />} />
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