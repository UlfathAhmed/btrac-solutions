import React from "react";

const ProductCard = ({ image, Projecttitle, ProjectButton, description  }) => {
  return ( 
    <div className="group text-center">
      <div className="relative overflow-hidden">
        <img src={image} className="w-full transition-all duration-500 hover:bg-blue-300" />
        <div className="absolute h-full w-full bg-[#225FA9]/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300">
        <h1 className="font-prata text-2xl font-normal text-white">{Projecttitle}</h1>
        </div>
      </div>
      <button className="text-xl font-prata dark:text-white py-5 invisible group-hover:visible">{ProjectButton}</button>
      
        
    </div>  
      
  );
};

export default ProductCard;
