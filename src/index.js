import React from 'react';
import ReactDOM from 'react-dom/client';
import "antd/dist/antd"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from './App';

import "./assets/styles/index.css";

import { ProductsProvider } from "./contexts/products_context"
import { FilterProvider } from './contexts/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
);
