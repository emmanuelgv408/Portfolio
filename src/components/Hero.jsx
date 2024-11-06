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

{/* container for left and right*/}
<div className="flex justify-between items-center space-y-[100px] gap-[200px]">


{/* left side*/}
<div className="w-1/2">
<div className="flex flex-col space-y-8  ml-[150px]">
        <p className="text-cyan text-6xl">
          Hey, <br />
          I'm <span className="text-white">Emmanuel</span>
         <br /><span className="text-white">{text}</span>
          <Cursor cursorColor="white" />
        </p>

        <button className="w-[150px] border rounded-md px-[24px] py-[10px] text-primary-text bg-cyan border-none hover:cursor-pointer">
          Contact
        </button>
      </div>
</div>

{/* right side*/}
<div className="w-1/2 " >

<img src={placeholder} alt="placeholder" srcset="" className="w-[250px] h-[250px] border rounded-full"/>

</div>



</div>




      <div className="text-cyan ml-[150px] flex gap-4 text-4xl w-full">
        <LinkedInIcon className="hover:cursor-pointer" />
        <GitHubIcon className="hover:cursor-pointer" />
      </div>




    </main>
  );
}

export default Hero;