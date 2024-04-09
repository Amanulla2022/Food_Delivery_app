import React from "react";
import { item } from "../../data/item";
import { FaPlusCircle } from "react-icons/fa";

const Meals = ({ selectedCategory }) => {
  console.log("Selected category in Meals:", selectedCategory);

  const filteredItems = selectedCategory
    ? item.filter((i) => i.itemId.startsWith(selectedCategory.toLowerCase()))
    : item;
  console.log("Filtered items:", filteredItems);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-red-500">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 pl-16 pt-20">
      <h1 className="header-2">
        {selectedCategory ? `All ${selectedCategory}` : "All Meals"}
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-6">
        {filteredItems.map((i) => (
          <div key={i.id} className="relative text-center">
            <img
              src={i.imgSrc}
              alt={i.name}
              className="w-full h-72 object-cover rounded-lg "
            />
            <div className="flex justify-between">
              <p className="text-xl">{i.name}</p>
              <p className="flex text-2xl"> {renderStars(i.ratings)}</p>
            </div>
            <p className="text-red-400 bg-white py-2 px-4 rounded-full absolute top-0 left-2 mt-2 font-bold">
              $<span className="text-green-500">{i.price}</span>
            </p>
            <button className="absolute top-0 right-2 bg-green-500  text-white px-4 py-2 rounded-full mt-2">
              <FaPlusCircle />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
