import React from 'react'
import { useSelector } from 'react-redux'
import Productcart from '../components/Productcart'
const Shop = () => {
  const products=useSelector((state)=>state.product)
  return (
        <div className='mx-auto py-12 md:px-16 lg:px-24 '>
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
        {products.products.map(((product)=>(    
          <Productcart product={product} key={product.id}/>
          )))}
          </div>
        </div>
       
  )
}

export default Shop
