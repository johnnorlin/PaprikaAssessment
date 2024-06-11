import React from "react";

interface DietaryIconProps {
  option: string;
}

//dynamic icon generator component
const DietaryIcon: React.FC<DietaryIconProps> = ({ option }) => {
  const iconPath = `/icons/${option}.svg`;

  return (
    <div className="icon-wrapper">
      <img src={iconPath} alt={option} />
    </div>
  );
};

export default DietaryIcon;
