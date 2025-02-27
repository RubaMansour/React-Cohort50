import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CategoryList from "../components/CategoryList";

const ProductList = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [activeCategory, setActiveCategory] = useState("All");

  const url =
    activeCategory === "All"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${activeCategory}`;

  const { data: products, loading, error } = useFetch(url);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <><CategoryList activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
    <div className="product-list">
      
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-image" />
              <button
                className="favorite-btn"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(product.id);
                }}
              >
                {favorites.includes(product.id) ? (
                  <FaHeart className="heart-icon filled" />
                ) : (
                  <FaRegHeart className="heart-icon" />
                )}
              </button>
            </div>
            <h3 className="product-title">{product.title}</h3>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
