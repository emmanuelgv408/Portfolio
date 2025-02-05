import React from "react"; 
import logo from '../assets/logo4.png';

function NavBar() {
  return (
    <nav className="h-[70px] sticky top-0 z-50 flex items-center justify-around border-none shadow-sm bg-custom-grey/90 px-4 sm:px-6 md:px-8">
      {/* Logo Section */}
      <div className="hover:cursor-pointer bg-transparent align-middle">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[80px] h-[80px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] min-w-[50px] min-h-[50px] object-contain" 
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4 items-center text-cyan text-sm sm:text-base md:text-lg">
        <a href="" className="hover:underline hover:cursor-pointer hover:text-dark-cyan">Home</a>
        <a href="#About" className="hover:underline hover:cursor-pointer">About</a>
        <a href="#Skills" className="hover:underline hover:cursor-pointer">Skills</a>
        <a href="#Projects" className="hover:underline hover:cursor-pointer">Projects</a>
        <a href="#Contact" className="hover:underline hover:cursor-pointer">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
