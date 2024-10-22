

import React, { useState } from 'react';

const EventCard = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex mt-5 flex-col justify-center items-center p-4 px-8 border border-gray-200 rounded-2xl shadow-md w-[350px] hover:shadow-lg  transform transition-all hover:scale-105  bg-white duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-32 h-3w-32 mb-4 rounded-lg object-cover" />
      <h2
        className={`text-xl text-center  font-bold ${isHovered ? 'text-orange-600' : 'text-black'}`}
      >
        {title}
      </h2>
      <p className="text-gray-600 text-sm text-justify ">{description}</p>
    </div>
  );
};

export default EventCard;
