import React from 'react';
import ReactDOM from 'react-dom/client';
import "antd/dist/antd"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/index.css";
import "./assets/styles/cart.css";
import "./assets/styles/auth.css"

import App from './App'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { ProductsProvider } from './contexts/products_context'
import { FilterProvider } from './contexts/filter_context'
import { CartProvider } from './contexts/cart_context'
import { FormProvider } from './contexts/form_context'


import { ProductsProvider } from "./contexts/products_context"
import { FilterProvider } from './contexts/filter_context';
import { CartProvider } from './contexts/cart_context';
import { UserProvider } from './contexts/user_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
       <UserProvider>
        <App />
       </UserProvider>
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);
