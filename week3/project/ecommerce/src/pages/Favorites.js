import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();
  
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite products yet!</p>
      ) : (
        <div className="product-list">
          {favorites.map((id) => {
            const { data: product } = useFetch(`https://fakestoreapi.com/products/${id}`);
            return product ? (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title} className="product-image" />
                  <h3>{product.title}</h3>
                </Link>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
