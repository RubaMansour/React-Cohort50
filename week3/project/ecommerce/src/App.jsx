import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList"; 
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Favorites from "./pages/Favorites";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <CategoryList activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <Routes>
          <Route path="/" element={<ProductList activeCategory={activeCategory} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
