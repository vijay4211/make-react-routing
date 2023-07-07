import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
