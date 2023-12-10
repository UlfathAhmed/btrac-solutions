import React from "react";

const ProductCard = ({ image, Projecttitle, ProjectButton, description  }) => {
  return (
    
     
        <div className="relative  ">
          <div className="">
            <img src={image} className="w-full transition-all duration-500 hover:bg-blue-300" /> 
            <h1 className="text-black dark:text-white ">{Projecttitle}</h1>
          </div>
          <button>
            <p className="text-black dark:text-white hover:opacity-25">{ProjectButton}</p>
          </button>
            
        </div>  
     
     
    
    
  );
};

export default ProductCard;
