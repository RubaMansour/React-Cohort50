import React from "react";

const CategoryList = ({ activeCategory, onCategoryChange }) => {
  const categories = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
