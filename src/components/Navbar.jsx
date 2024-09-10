import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/ProductSlice'
const Navbar = () => {
 const [isModelOpen,setIsModel]=useState(false);
 const [isLogin,setIsLogin]=useState(true);
 const [search,setSearch]=useState('')
 const dispatch=useDispatch();
 const navigate=useNavigate();

 const handelSearch=(e)=>{
  e.preventDefault();
  dispatch(setSearchTerm(search));
  navigate('/filter-data');
}
 const openSignUp=()=>{
    setIsLogin(false);
    setIsModel(true);
 }
 const openLogin=()=>{
  setIsLogin(true);
  setIsModel(false);
}

  const products=useSelector(state=>state.cart.products)
  return (
    <nav className='bg=white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='test-lg font-bold'>
          <NavLink to="/">E-Shop</NavLink>
        </div>
        <div className='relative flex-1 mx-4'>
          <form onSubmit={handelSearch}>
            <input className='w-full bordere py-2 px-4' type="text" placeholder='search products' onChange={(e)=>setSearch(e.target.value)}/>
            <FaSearch className='absolute top-3 right-3 text-red-500'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <NavLink to="/cart" className="relative">< FaShoppingCart className='text-xl'/ >
           {products.length>0 && (
            <span className='absolute top-0 text-xs w-3 lft-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
              {products.length}
            </span>)}
          </NavLink>
          <button className='hidden md:block' onClick={()=>setIsModel(true)}>login | Register</button>
          <button className='block md:hidden' onClick={()=>setIsModel(true)}><FaUser className='text-xl'/></button>
        </div>
      </div> 
         <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/shop" className="hover:underline">Shop</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
         </div>
         <Modal isModelOpen={isModelOpen} setIsModel={setIsModel}>
          {isLogin?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
         </Modal>

    </nav>
   
  )
}

export default Navbar
