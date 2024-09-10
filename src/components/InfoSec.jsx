import React from 'react'
import { FaHeadset, FaMoneyBill, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'


const InfoSEc = () => {
  const infoItems=[
    {
      icon:<FaShippingFast className='text-3xl text-red-800'/>,
      title:"Free Shipping",
      description:"get your order delivered with no extra cost",
    },
    {
      icon:<FaHeadset className='text-3xl text-red-600'/>,
      title:"Support 24/7",
      description:"we are here to assist you anytime",
    },
    {
      icon:<FaMoneyBill  className="text-3xl text-red-600"/>,
      title:"100% Money Back",
      description:"full refund if not satisfied",
    },
    {
      icon:<FaLock className="text-3xl text-red-600"/>,
      title:"Payment secure",
      description:"your payment info is safe with us",
    },
    {
      icon:<FaTag className="text-3xl text-red-600"/>,
      title:"Discount",
      description:"enjoy the best price on our products",
    },
  ]
  return (
    <div className='bg-white pb-8 pt-12'>
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((items,index)=>(
             <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md  transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
              {items.icon}
              <h1 className='mt-4 text-xl font-semibold'>{items.title}</h1>
              <p className='mt-2 text-gray-700'>{items.description}</p>
             </div>
            ))}
       </div>
    </div>
  )
}

export default InfoSEc
