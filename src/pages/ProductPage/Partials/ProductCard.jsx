import React from "react";

const ProductCard = ({ image, altDesc, subHeading, description  }) => {
  return (
    
      <div className="group">
        <img src={image} alt={altDesc} className="w-full" /> 
          
      </div>
    
  );
};

export default ProductCard;
