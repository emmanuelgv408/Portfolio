import React from "react"; 
import logo from '../assets/logo4.png';



function NavBar() {
  return (
    <nav className=" h-[70px] sticky top-0 flex justify-around flex-row min-w-full  items-center border-none shadow-sm bg-custom-grey/90 ">
      <div className="  hover:cursor-pointer bg-transparent  align-middle  ">
        <img src={logo} alt="Logo" className=" w-[80px] h-[80px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] object-contain opacity-100" />
      </div>

      <div className="flex gap-6 items-center text-cyan ">
        <a href="" className="hover:underline hover:cursor-pointer hover:text-dark-cyan">Home</a>
        <a href="#About" className="hover:underline hover:cursor-pointer">About</a>
        <a href="#Skills" className="hover:underline hover:cursor-pointer">Skills</a>
        <a href="#Projects"className="hover:underline hover:cursor-pointer">Projects</a>
        <a href="#Contact"className="hover:underline hover:cursor-pointer">Contact</a>

      </div>
    </nav>
  );
}

export default NavBar;
