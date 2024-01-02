import React from "react";

const ProjectCard = ({ image, heading  }) => {
  return (
    
    <div className="group text-center p-2 ">
    <div className="relative overflow-hidden">
      <img src={image} className="w-full transition-all duration-500 hover:bg-blue-300" />
      <div className="absolute inset-0 py-40 bottom-20 pr-20 group-hover:bottom-0">
        <div className=" bg-[#225FA9]/50 flex items-center justify-center  opacity-0 group-hover:opacity-100 duration-500 w-full h-full">
          <h1 className="font-prata text-3xl font-normal text-white">{heading}</h1>
        </div>
      </div>
    </div>
    {/* <button className="text-xl font-prata dark:text-white py-5 invisible group-hover:visible hover:text-[#225FA9] dark:hover:text-[#225FA9]">{ProductButton}</button>    */}

  </div> 
    
  );
};

export default ProjectCard;
