import React from 'react'
import male from "../assets/male.avif"
import female from "../assets/female.avif"
import kid from "../assets/kids.avif"
const Who = () => {
  const they=[
    {
      title:"Men",
      imgageUrl:male,
    },
    {
      title:"Women",
      imgageUrl:female,
    },
    {
      title:"Kids",
      imgageUrl:kid,
    },

  ]
  return (
    <div className='container ma-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {they.map((item,index)=>(
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer' >
           <img className='h-64 w-full object-cover rounded-lg shadow-md' src={item.imgageUrl} alt="" />
           <div className='absolute top-20 left-12'>
            <p className='text-xl font-bold'>{item.title}</p>
            <p className='text-gray-700'>View All</p>
           </div>
        </div>
      )
      )}
    </div>
  )
}

export default Who
