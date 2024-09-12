import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
  
    <section className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">About Our E-Shop</h1>
        <p className="text-lg mb-6">
          Welcome to our e-shopping platform, where you can find the best products at the best prices, delivered right to your door.
        </p>
      </div>
    </section>

  
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Quality Products</h3>
          <p className="text-gray-600">
            We offer a wide range of high-quality products that meet the needs of all types of customers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Affordable Pricing</h3>
          <p className="text-gray-600">
            Our competitive pricing ensures that you get the best value for your money.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Excellent Support</h3>
          <p className="text-gray-600">
            Our customer support team is here to help you with any questions or concerns you may have.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions or need help? Feel free to contact us, and we'll be happy to assist you!
        </p>
        <a
          href="mailto:support@eshop.com"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700"
        >
          Contact Us
        </a>
      </div>
    </section>
  </div>
  )
}

export default About

