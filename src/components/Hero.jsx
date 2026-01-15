import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroImg from "../assets/hero.png";

function Hero() {
  const [text] = useTypewriter({
    words: [ "Full-Stack Software Engineer",
    "React & TypeScript Developer",
    "Node.js & MongoDB Engineer",
    "Problem Solver"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <main
      id="Hero"
      className="flex flex-col min-w-full h-screen justify-center space-y-20 bg-background relative p-6"
    >
      {/* container for left and right */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[100px] px-6 relative z-10">
        {/* left side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div
            className="flex flex-col space-y-8"
            style={{
              minHeight: "280px", 
              maxHeight: "auto", 
              overflow: "hidden",
            }}
          >
            <p className="text-cyan text-4xl sm:text-4xl lg:text-6xl">
              Hey, <br />
              I'm <span className="text-white">Emmanuel</span>
              <br />
              <span className="text-white block break-words whitespace-normal">
                {text}
                <Cursor cursorColor="white" />
              </span>
            </p>

            {/* Contact Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                className="w-[150px] border rounded-md px-[24px] py-[10px] text-primary-text bg-cyan border-none hover:cursor-pointer mt-4" // added mt-4 to separate from text
                onClick={() => {
                  document
                    .getElementById("Contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="placeholder"
            className="max-w-full w-[300px] sm:w-[500px] lg:w-[700px] z-0"
          />
        </div>
      </div>

      {/* Social links */}
      <div className="text-cyan flex gap-4 text-3xl sm:text-4xl w-full justify-center lg:justify-start px-6">
        <a
          href="https://github.com/emmanuelgv408"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GitHubIcon className="hover:cursor-pointer hover:text-white transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuelgv408/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="hover:cursor-pointer hover:text-white transition-transform transform hover:scale-110" />
        </a>
      </div>
    </main>
  );
}

export default Hero;
