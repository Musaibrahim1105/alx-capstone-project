import React from 'react'
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    <div>
      <div className="bg-[#e9b08e] text-white fixed bottom-0 right-0 left-0 z-10 shadow-md p-4 flex justify-center space-x-6">
        <h3 className='text-white'>Recipe Finder App</h3>
        <p className='text-white'>© 2023 Recipe Finder. All rights reserved.</p>
        <p className='text-white'>Privacy Policy</p>
        <p className='text-white'>Terms of Service</p>
      </div>
    </div>
    <div>
    <a href="https://facebook.com" className="text-white hover:text-blue-500 text-2xl">
  <i className="fa-brands fa-facebook"></i>
</a>

    </div>
    <div className="flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" className="text-blue hover:text-blue-500 text-2xl">
          <FaFacebook />
        </a>
      </div>
    </div>
  )
}

export default Footer
