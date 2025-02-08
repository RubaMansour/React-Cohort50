import { useState } from "react";
import "./App.css";
import productsData from "./fake-data/all-products";
import categories from "./fake-data/all-categories";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((product) => {
        return product.category === activeCategory;
        });
        
  return (
    <div className="app">
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
