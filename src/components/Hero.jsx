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
    <main  id = 'Hero' className="flex flex-col min-w-full  h-[80%]  justify-center space-y-[200px] bg-background">

{/* container for left and right*/}
<div className="flex justify-between items-center space-y-[100px] gap-[200px]">


{/* left side*/}
<div className="w-1/2">
<div className="flex flex-col space-y-8  px-9">
        <p className="text-cyan text-6xl">
          Hey, <br />
          I'm <span className="text-white">Emmanuel</span>
         <br /><span className="text-white">{text}</span>
          <Cursor cursorColor="white" />
        </p>

        <button className="w-[150px] border rounded-md px-[24px] py-[10px] text-primary-text bg-cyan border-none hover:cursor-pointer"
        onClick={() => {
          document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
        }}>
          Contact
        </button>
      </div>
</div>

{/* right side*/}
<div className="w-1/2 px-9" >

<img src={placeholder} alt="placeholder" srcset="" className="w-[250px] h-[250px] border rounded-full"/>

</div>



</div>




      <div className="text-cyan flex gap-4 text-4xl w-full px-9">
      <a
          href="https://github.com/emmanuelgv408"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <GitHubIcon className="hover:cursor-pointer hover:text-white transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuelgv408/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <LinkedInIcon className="hover:cursor-pointer hover:text-white transition-transform transform hover:scale-110" />
        </a>
      </div>




    </main>
  );
}

export default Hero;