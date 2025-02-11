import React from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useFavorites();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(product.id)}
        >
          {favorites.includes(product.id) ? (
            <FaHeart className="heart-icon filled" />
          ) : (
            <FaRegHeart className="heart-icon" />
          )}
        </button>
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;






