// components/ParallaxSection.jsx

import React from "react";

const ParallaxSection = ({ imageUrl, children }) => {
  return (
    <div
      className="h-[300px] bg-fixed bg-center bg-cover flex items-center  text-white relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-opacity-50 p-8 rounded-xl max-w-2xl text-start items-start">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
