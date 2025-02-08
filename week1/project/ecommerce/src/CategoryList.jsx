const CategoryList = ({ categories, activeCategory, onCategoryChange }) => {
  const cleanedCategories = categories.map((category) =>
    category.replace("FAKE: ", "")
  );

  return (
    <div className="category-list">
      <button
        onClick={() => onCategoryChange("All")}
        className={`category-btn ${activeCategory === "All" ? "active" : ""}`}
      >
        All
      </button>

      {cleanedCategories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
