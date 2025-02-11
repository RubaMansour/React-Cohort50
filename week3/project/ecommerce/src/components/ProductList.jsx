import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";

const ProductList = ({ activeCategory }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const url =
    activeCategory === "All"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${activeCategory}`;

  const { data: products, loading, error } = useFetch(url);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
          </Link>
          <button className="favorite-btn" onClick={() => toggleFavorite(product.id)}>
            {favorites.includes(product.id) ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
