import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { useState } from 'react'
import Order from './pages/Order'
import Filter from './pages/Filter'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {
 const [order,setOrder]=useState(null)
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element=<Home/> />
          <Route path='/shop' element=<Shop/>/>
          <Route path='/cart' element=<Cart setOrder={setOrder}/>/>
          <Route path='/order-confirmation' element=<Order order={order}/> />
          <Route path='/filter-data' element=<Filter/>/>
          <Route path='/contact' element=<Contact/>/>
          <Route path='/about' element=<About/>/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
