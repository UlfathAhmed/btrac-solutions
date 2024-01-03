import React from "react";

const ProjectCard = ({ image, heading  }) => {
  return (
    
  <div className="group text-center p-2 ">
      <div className="relative overflow-hidden">
        <img src={image} className="w-96 duration-500 hover:bg-blue-300 group-hover:scale-x-150 transition-all" />
        <div className="absolute inset-0 py-44 pr-32 group-hover:bottom-0">
          <div className=" bg-[#225FA9]/50 flex items-center justify-center  opacity-0 group-hover:opacity-100 duration-500 w-full h-full">
            <h1 className="font-prata text-2xl font-normal text-white">{heading}</h1>
          </div>
        </div>
      </div>
    {/* <button className="text-xl font-prata dark:text-white py-5 invisible group-hover:visible hover:text-[#225FA9] dark:hover:text-[#225FA9]">{ProductButton}</button>    */}

  </div> 
    
  );
};

export default ProjectCard;
