import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'

const App = () => {
  return (
    
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='*' element={<Error />}/>
     </Routes>
    
    </BrowserRouter>
  )
}

export default App
