import React from 'react';
import summary from './Assest/d1.png'

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0 flex items-center justify-center">
            {/* <h2 className="text-white font-bold text-xl mb-4">Company Name</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in posuere ipsum. Curabitur tempor ultrices lectus sit amet fermentum.</p> */}

            <img src={summary} className='w-[20%] text-purple-600'></img>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-para2 font-bold text-xl mb-4">Links</h2>
            <ul className="list-none">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-para2 font-bold text-xl mb-4">Social Media</h2>
            <ul className="list-none">
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              <button className="bg-blue-600 text-white py-2 px-4 rounded-r-lg">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; 2023 Company Name. All rights reserved.
          </div>
        </div>
      </div>

      </footer>

  )
}

export default Footer

