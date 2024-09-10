import React from 'react'
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>E-shop</h3>
          <p className='mt-4'>you are one step all your need. Shop with us and experience the best online shopping experience</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <NavLink to='/' className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop' className="hover:underline">Shop</NavLink>
            </li>
            <li>
              <NavLink to='/about' className="hover:underline">About</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="hover:underline">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div >
          <h4 className='text-lg font-semibold'>Follow us</h4>
          <div className='flex space-x-4 mt-4'>
          <a href='' className='hover:text-gray-400'><FaFacebook/></a>
          <a href='' className='hover:text-gray-400'><FaTwitter/></a>
          <a href="" className='hover:text-gray-400'><FaGithub/></a>
          </div>
        <form className='flex items-center justify-center mt-6'>
          <input className='w-full p-2 rounded-lg bg-gray-800 border border-gray-600' type="email" placeholder='your email' />
          <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
        </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy;2024 E-shop all rights reserved</p>
          <div className='flex flex-col items-center space-x-4 mt-4 md:mt-0'>
            <a href="" className='hover:underline'> Privacy policy</a>
            <a href="" className='hover:underline'>term and condition</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
