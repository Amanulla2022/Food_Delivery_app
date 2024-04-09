import React from "react";
import { menuItem } from "./../../data/menuItem";

const Category = ({ onSelectCategory }) => {
  const handleClick = (category) => {
    console.log("Clicked on category:", category);
    onSelectCategory(category);
  };

  return (
    <div className="bg-gray-100 px-16">
      <h1 className="header-2">Categories</h1>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-8 ">
        {menuItem.map((item) => (
          <div
            key={item.id}
            className="text-center cursor-pointer"
            onClick={() => handleClick(item.name)}
          >
            <p className="mt-2 text-lg font-semibold underline text-start">
              {item.name}
            </p>
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-48 h-48 object-cover rounded-full hover:translate-x-1 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
