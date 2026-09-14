import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Categories from './Pages/Categories'
import Aboutus from './Pages/Aboutus'
import Login from './Pages/Login'
import Ruchira from './Ruchira'
import Header from './Header'
import Footer from './Footer'
import Foodcategory from './Pages/Foodcategory'
import { Demo } from './Pages/demo'
import MenuCard from './Pages/MenuCard'
import Payements from './Pages/Payements'
import Gratitude from './Pages/Gratitude'
import SplashScreen from './Pages/Flashscreen'
import Addtocart from './Pages/Addtocart'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <SplashScreen />
        <Header />
        <Routes>
          <Route path="/" element={<Ruchira />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            {/* <Route path="menu" element={<Demo />}></Route> */}
            <Route path='/menucards' >
              <Route path="/menucards/:mcid" element={<MenuCard />} ></Route>
            </Route>
            <Route path="/categories">
              <Route path="/categories/:food" element={<Foodcategory />}></Route>
            </Route>
            <Route path="/payements" element={<Payements />} />
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/gratitude" element={<Gratitude />}></Route>
            <Route path="/addtocart" element={<Addtocart />} />

          </Route>
        </Routes>
        <Footer />

      </BrowserRouter >
    </CartProvider>
  )
}

export default App