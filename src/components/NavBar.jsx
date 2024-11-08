import React from "react"; 
import logo from '../assets/logo.png';



function NavBar() {
  return (
    <nav className="sticky top-0 flex justify-around flex-row min-w-full  border-none shadow-sm bg-custom-grey/90 ">
      <div className="hover:cursor-pointer bg-transparent">
        <img src={logo} alt="Logo" className=" w-[70px] bg-transparent opacity-100" />
      </div>

      <div className="flex gap-6 items-center text-cyan">
        <a href="" className="hover:underline hover:cursor-pointer hover:text-dark-cyan">Home</a>
        <a href="" className="hover:underline hover:cursor-pointer">About</a>
        <a href="" className="hover:underline hover:cursor-pointer">Skills</a>
        <a href=""className="hover:underline hover:cursor-pointer">Projects</a>
        <a href=""className="hover:underline hover:cursor-pointer">Contact</a>

      </div>
    </nav>
  );
}

export default NavBar;
