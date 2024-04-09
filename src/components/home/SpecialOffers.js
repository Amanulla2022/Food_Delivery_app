import React from "react";
import burger from "../../images/Special_offers/burger.jpeg";
import indian from "../../images/Special_offers/indian.jpeg";
import desert from "../../images/Special_offers/dessert_offer.jpeg";
import pasta from "../../images/Special_offers/pasta.jpeg";
import Offer_Individual from "./Offer_Individual";

const SpecialOffers = () => {
  const offers = [
    {
      name: "Burger Offer",
      image: burger,
      description: "Delicious burgers at discounted prices!",
    },
    {
      name: "Indian Offer",
      image: indian,
      description: "Authentic Indian cuisine on special offer!",
    },
    {
      name: "Dessert Offer",
      image: desert,
      description: "Irresistible desserts with great discounts!",
    },
    {
      name: "Pasta Offer",
      image: pasta,
      description: "Delicious pasta dishes at unbeatable prices!",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-semibold underline">
        Special <span className="text-green-500">Offers</span>
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-6 mt-4">
        {offers.map((offer, index) => (
          <Offer_Individual key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
