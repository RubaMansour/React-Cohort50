import React from "react";

const CategoryList = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-list">
      <button
        onClick={() => onCategoryChange("All")}
        className={`category-btn ${activeCategory === "All" ? "active" : ""}`}
      >
        All
      </button>

      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
        >
          {category.replace("FAKE: ", "")}{" "}
      </button>
      ))}
    </div>
  );
};

export default CategoryList;
