import React from "react";

import memoji from "../assets/memoji3.png";

function About() {
  return (
    <div className="min-w-full h-screen/2 bg-background flex p-9">
      {/*left*/}
      <div className="min-h-full w-1/2 flex justify-center flex-col gap-5">
        <h1 className="text-cyan text-3xl font-bold ">About</h1>
        <p className="text-cyan text-3xl">
          {" "}
          I'm a <span className="text-white">
            Software Engineering student
          </span>{" "}
          at <span className="text-white">Western Governers University</span>{" "}
          with future aspirations of become a full stack developer. I'm a{" "}
          <span className="text-white">quick learner</span> and a{" "}
          <span className="text-white">highly adaptable </span>student that will
          exceed your expectations.
        </p>
        
      </div>

      {/*right*/}

      <div className="min-h-full w-1/2 flex justify-center items-center">
        <div className="bg-custom-grey flex items-center justify-center rounded-full p-10 "> 
         <img src={memoji} alt="" srcset="" className=" w-[200px]" />
         </div>
      </div>
    </div>
  );
}

export default About;
