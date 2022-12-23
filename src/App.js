import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, About, Error, SingleProducts } from "./pages"

function App(props) {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='*' element={<Error />}  />
       <Route path='/products/:id' element={<SingleProducts />} />
     </Routes>
   </Router>
  );
}

export default App;