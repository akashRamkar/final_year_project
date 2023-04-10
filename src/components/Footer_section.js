import React from 'react';
import summary from './Assest/d1.png'

function Footer() {
  return (
    <footer className="bg-white py-8 max-w-[1100px] w-11/12 mx-auto">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap ">
          <div className=" lg:w-[200px] w-[150px] mb-8 lg:mb-0 flex items-center justify-center">
           

            <img src={summary} className=' lg:w-[50%] w-[40%] text-purple-600'></img>
          </div>
          <div className="w-[130px] lg:w-[200px] mb-8 lg:mb-0">
            <h2 className="text-para2 font-bold text-xl mb-4">Links</h2>
            <ul className="list-none">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-[130px] lg:w-[200px] mb-8 lg:mb-0">
            <h2 className="text-para2 font-bold text-xl mb-4">Social Media</h2>
            <ul className="list-none">
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="w-[130px] lg:w-[200px] mb-8 lg:mb-0">
            
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ml-10" />
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

