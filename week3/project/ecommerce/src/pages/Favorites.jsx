import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const url = "https://fakestoreapi.com/products";
  const { data: products, loading, error } = useFetch(url);

  if (loading) return <p>Loading favorites...</p>;
  if (error) return <p>{error}</p>;

  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  return (
    <div className="product-list">
      {favoriteProducts.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteProducts.map((product) => (
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
        ))
      )}
    </div>
  );
};

export default Favorites;
