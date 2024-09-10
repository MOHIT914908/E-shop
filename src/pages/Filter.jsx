import React from 'react'
import { useSelector } from 'react-redux'
import nopro from "../assets/nopro.png"
import Productcart from '../components/Productcart'
const Filter = () => {
  const filterProduct=useSelector(state=>state.product.filteredData)
  return (
    <div className='mx-auto py-12 md:px-16 lg:px-24 '>
    {filterProduct.length > 0 ?<>
    <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
    {
      filterProduct.map(((product)=>(    
      <Productcart product={product}/>
      )))}
      </div>
    </>
    :<div>
      <img src={nopro} alt="failed" />
    </div>}
    </div>
  )
}

export default Filter
