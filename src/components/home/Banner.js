import React, { useState, useEffect } from "react";
import banner from "../../images/food_banner.jpeg";

const Banner = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const lines = [
    "Indulge in flavors that dance on your palate, leaving you craving for more.",
    "Experience the perfect harmony of spices, creating an explosion of taste in every bite.",
    "Savor the richness of every ingredient, carefully crafted to tantalize your taste buds.",
    "Embark on a culinary adventure, exploring a symphony of flavors from around the world.",
    "Discover the essence of true gastronomy, where every dish tells a story of passion and creativity.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:gap-0 gap-4 justify-center">
        <div className="md:w-1/2 md:mr-8">
          <img
            src={banner}
            alt="Home Banner Logo"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left mb-4 md:mb-6">
            <span className="text-green-500">Food</span> is not just about
            eating energy, it's an experience.
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left">
            “{lines[lineIndex]}”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
