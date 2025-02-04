import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Router>
      <div className="app">
     
        <Routes>
          <Route
            path="/"
            element={
              <>   <h1 className="app-title">Prouducts</h1>
                <CategoryList activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
                <ProductList activeCategory={activeCategory} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
