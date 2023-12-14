import React from "react";

const ProductCard = ({ image, Projecttitle, ProjectButton, description  }) => {
  return ( 
    <div className="group text-center p-2 ">
      <div className="relative overflow-hidden">
        <img src={image} className="w-full transition-all duration-500 hover:bg-blue-300" />
        <div className="absolute inset-0 p-5 -bottom-10 group-hover:bottom-0">
          <div className=" bg-[#225FA9]/50 flex items-center justify-center  opacity-0 group-hover:opacity-100 duration-300 w-full h-full">
            <h1 className="font-prata text-3xl font-normal text-white">{Projecttitle}</h1>
          </div>
        </div>
      </div>
      <button className="text-xl font-prata dark:text-white py-5 invisible group-hover:visible hover:text-blue-300">{ProjectButton}</button>
      
        
    </div>  
      
  );
};

export default ProductCard;
