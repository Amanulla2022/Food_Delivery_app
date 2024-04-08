import React, { useState } from "react";
import Banner from "./../../components/home/Banner";
import Categories from "../../components/home/Categories";
import Meals from "../../components/home/Meals";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
  };

  console.log("Current selected category:", selectedCategory);
  return (
    <div>
      <Banner />
      <Categories onSelectCategory={handleSelectCategory} />
      <Meals selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
