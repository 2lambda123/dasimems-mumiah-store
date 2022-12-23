import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, About, Error, SingleProducts, Contact } from "./pages"

function App(props) {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/products/:id' element={<SingleProducts />} />
       <Route path='*' element={<Error />}  />
     </Routes>
   </Router>
  );
}

export default App;