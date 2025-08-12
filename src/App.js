import React from 'react'
import Navbar from './components/Navbar.jsx'
import Slides from './components/Slides.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><Slides/><Product/></>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </Router>
    </div>
  )
}

export default App