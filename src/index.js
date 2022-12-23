import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import "antd/dist/antd"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from './App';

import { ProductsProvider } from "./contexts/products_context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
