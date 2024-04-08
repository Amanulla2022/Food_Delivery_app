import React from "react";
import { menuItem } from "./../../data/menuItem";

const Categories = ({ onSelectCategory }) => {
  const handleClick = (category) => {
    console.log("Clicked on category:", category);
    onSelectCategory(category);
  };

  return (
    <div className="bg-gray-100 pl-16">
      <h1 className="text-2xl underline mb-4">Categories</h1>
      <div className="grid grid-cols-6 gap-6 ">
        {menuItem.map((item) => (
          <div
            key={item.id}
            className="text-center "
            onClick={() => handleClick(item.name)}
          >
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-full h-48 object-cover rounded-full hover:translate-x-1 hover:translate-y-1"
            />
            <p className="mt-2 text-lg font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
