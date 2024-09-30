import React from "react";

export default function AllFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Website Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl tracking-[5px] font-title font-semibold">NAVIZIT</h2>
          <div className="w-[180px] h-[1.2px]  mx-auto mt-2  bg-white " >
            </div>        
        </div>

        {/* Links Section */}
        <div className="ml-14">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6 mr-16">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/HomePage/Footer/Facebook.svg" alt="Facebook" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/HomePage/Footer/Twitter.svg" alt="Twitter" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./src/HomePage/Footer/Instagram.svg" alt="Instagram" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-6 w-6">
            <img src="./src/HomePage/Footer/Linkedin.svg" alt="LinkedIn" className="m-0 p-0  hover:opacity-75" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} NAVIZIT . All rights reserved.</p>
      </div>
    </footer>
  );
}
