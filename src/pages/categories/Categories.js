import React, { useState } from "react";
import Category from "../../components/categories/Category";
import Meals from "../../components/categories/Meals";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
  };

  console.log("Current selected category:", selectedCategory);
  return (
    <div>
      <Category onSelectCategory={handleSelectCategory} />
      <Meals selectedCategory={selectedCategory} />
    </div>
  );
};

export default Categories;
