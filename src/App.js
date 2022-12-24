import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Footer, Navbar, } from './components';
import { Home, About, Error, SingleProducts, Contact, Product } from "./pages"

function App(props) {
  return (
   <Router>
     <Navbar />

      <main className="main-body">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:id' element={<SingleProducts />} />
          <Route path='*' element={<Error />}  />
        </Routes>
     </main>
     <Footer />
   </Router>
  );
}

export default App;