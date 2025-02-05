import React, { useState } from "react"; 
import logo from '../assets/logo4.png';

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-around border-none shadow-sm bg-custom-grey px-4 sm:px-6 md:px-8">
      {/* Logo Section */}
      <div className="hover:cursor-pointer bg-transparent align-middle">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[80px] h-[80px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] min-w-[50px] min-h-[50px] object-contain" 
        />
      </div>

      {/* Navigation Links */}
        {/* Navigation Links */}
  <div className="flex gap-10 items-center text-white text-sm md:text-base font-semibold">
    <a
      href="#Home"
      onClick={() => handleClick("Home")}
      className={`hover:text-cyan-500 hover:cursor-pointer  border-b-2 ${activeLink === "Home" ? "border-cyan" : "border-transparent"}`}
    >
      Home
    </a>
    <a
      href="#About"
      onClick={() => handleClick("About")}
      className={`hover:text-cyan-500 hover:cursor-pointer  border-b-2 ${activeLink === "About" ? "border-cyan" : "border-transparent"}`}
    >
      About
    </a>
    <a
      href="#Skills"
      onClick={() => handleClick("Skills")}
      className={`hover:text-cyan-500 hover:cursor-pointer border-b-2 ${activeLink === "Skills" ? "border-cyan" : "border-transparent"}`}
    >
      Skills
    </a>
    <a
      href="#Projects"
      onClick={() => handleClick("Projects")}
      className={`hover:text-cyan-500 hover:cursor-pointer  border-b-2 ${activeLink === "Projects" ? "border-cyan" : "border-transparent"}`}
    >
      Projects
    </a>
    <a
      href="#Contact"
      onClick={() => handleClick("Contact")}
      className={`hover:text-cyan-500 hover:cursor-pointer  border-b-2 ${activeLink === "Contact" ? "border-cyan" : "border-transparent"}`}
    >
      Contact
    </a>
  </div>
    </nav>
  );
}

export default NavBar;
