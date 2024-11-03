import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Hero() {
  return (
    <main className="flex flex-col min-w-full min-h-screen bg-background justify-center space-y-[200px]">
      <div className="flex flex-col space-y-8  ml-[150px]">
        <p className="text-cyan text-7xl">
          Hey, <br />
          I'm <span className="text-custom-gray">Emmanuel</span>
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
