import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import placeholder from "../assets/placeholder.png";

function Hero() {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Student", "Hot Wing Lover", "Gym Addict"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <main className="flex flex-col min-w-full min-h-screen  justify-center space-y-[200px] ">



      <div className="flex flex-col space-y-8  ml-[150px]">
        <p className="text-cyan text-7xl">
          Hey, <br />
          I'm <span className="text-white">Emmanuel</span>
          <br /> I'm a <span className="text-white">{text}</span>
          <Cursor cursorColor="white" />
        </p>

        <button className="w-[150px] border rounded-md px-[24px] py-[10px] text-primary-text bg-cyan border-none hover:cursor-pointer">
          Contact
        </button>
      </div>

      <div className="text-cyan ml-[150px] flex gap-4 text-4xl w-full">
        <LinkedInIcon className="hover:cursor-pointer" />
        <GitHubIcon className="hover:cursor-pointer" />
      </div>




    </main>
  );
}

export default Hero;
