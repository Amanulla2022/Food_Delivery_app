import React from "react";
import { Link } from "react-router-dom";

const Offer_Individual = ({ offer }) => {
  return (
    <div className="relative ">
      <h3 className="text-lg font-semibold mb-2 underline text-purple-500">
        {offer.name}
      </h3>
      <img
        src={offer.image}
        alt={offer.name}
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="offer-details bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-500">{offer.description}</p>
      </div>
      <Link
        to="/categories"
        className="absolute bottom-14 right-0 bg-green-500 text-white p-2 m-1 rounded-full hover:bg-green-800"
      >
        Order Now
      </Link>
    </div>
  );
};

export default Offer_Individual;
