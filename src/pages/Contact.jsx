import React from 'react'

const Contact = () => {

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Contact Us</h2>
        <form >
          <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor="">Full Name</label>
          <input   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             id='name' type="text" placeholder='Enter your name' />
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="">email</label>
          <input  placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required  type="text" />
          </div>
          <div>
            <label  className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea  name="message" id="message"  placeholder="Write your message here..."
              rows="5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required></textarea>
          </div>
          <div>
            <button  className="w-full px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
