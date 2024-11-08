import React from "react";

function Projects() {
  return (
    <div className="h-full min-w-full bg-background p-8 text-cyan flex flex-col gap-3">
      <h1 className="text-3xl font-bold flex justify-center">
        Latest Projects
      </h1>
      {/* projects container */}
      <div className="bg-custom-grey min-w-full h-[80%] flex flex-col"></div>
    </div>
  );
}

export default Projects;
