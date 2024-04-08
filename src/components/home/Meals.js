import React from "react";
import { item } from "../../data/item";

const Meals = ({ selectedCategory }) => {
  console.log("Selected category in Meals:", selectedCategory);

  const filteredItems = selectedCategory
    ? item.filter((i) => i.itemId.startsWith(selectedCategory.toLowerCase()))
    : item;
  console.log("Filtered items:", filteredItems);

  return (
    <div className="bg-gray-100 pl-16">
      <h1 className="text-2xl underline mb-4 ">
        {selectedCategory ? `All ${selectedCategory}` : "All Meals"}
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {filteredItems.map((i) => (
          <div key={i.id} className="text-center">
            <img
              src={i.imgSrc}
              alt={i.name}
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold">{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
