import React, { useState } from "react";
import { item } from "../../data/item";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useCart } from "./../../context/CartContext";

const Meals = ({ selectedCategory }) => {
  const { addToCart } = useCart();

  const [counters, setCounters] = useState({});

  const filteredItems = selectedCategory
    ? item.filter((i) => i.itemId.startsWith(selectedCategory.toLowerCase()))
    : item;

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

  const increaseCount = (itemId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [itemId]: (prevCounters[itemId] || 0) + 1,
    }));
  };

  const decreaseCount = (itemId) => {
    if (counters[itemId] > 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [itemId]: prevCounters[itemId] - 1,
      }));
    }
  };

  return (
    <div className="bg-gray-100 pl-16 pt-20">
      <h1 className="header-2">
        {selectedCategory ? `All ${selectedCategory}` : "All Meals"}
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-6">
        {filteredItems && filteredItems.length > 0 ? (
          filteredItems.map((i) => (
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
              <div className="absolute top-2 right-0  flex justify-center">
                {counters[i.id] === 0 || !counters[i.id] ? (
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded-full"
                    onClick={() => {
                      increaseCount(i.id);
                      addToCart(i);
                    }}
                  >
                    <FaPlusCircle />
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-full"
                      onClick={() => decreaseCount(i.id)}
                    >
                      <FaMinusCircle />
                    </button>
                    <span className="px-4 py-1 bg-gray-300 text-gray-700">
                      {counters[i.id]}
                    </span>
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-r-full"
                      onClick={() => {
                        increaseCount(i.id);
                        addToCart(i); // Add the item to the cart when clicked
                      }}
                    >
                      <FaPlusCircle />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
