import React from "react";

const ProjectCard = ({ image, altDesc, subHeading, description  }) => {
  return (
    
      <div className="group">
        <img src={image} alt={altDesc} className="w-full" /> 
          
      </div>
    
  );
};

export default ProjectCard;
